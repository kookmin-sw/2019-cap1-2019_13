#include <SoftwareSerial.h>

int LeftSolenoid[6]={4, 5, 6, 7, 8, 9};
int RightSolenoid[6]={10, 11, 12, 13, 14, 15};
int DataArray[55]={0};

char LeftSol_Status[6]={LOW};
char RightSol_Status[6]={LOW};

int DataLength = 0;
int Tx = 2;
int Rx = 3;
int Bluetooth = 0;

SoftwareSerial BTSerial(Tx, Rx);   //bluetooth module Tx:Digital 2 Rx:Digital 3   

void setup() {
  BTSerial.begin(9600); //블루투스 통신 시작
  Serial.begin(9600); //시리얼 통신 시작
  Bluetooth = 0;
  DataLength = 0;
  for(int i = 0; i < 6; i++) //핀연결, 모터 상태 초기화
  {
    pinMode(LeftSolenoid[i], OUTPUT);
    pinMode(RightSolenoid[i], OUTPUT);
    LeftSol_Status[i] = LOW;
    RightSol_Status[i] = LOW;
  }
}

void loop() {

  String DotData;
  for(int i = 0; i < 6; i++) //상태 업데이트
  {
    digitalWrite(LeftSolenoid[i], LeftSol_Status[i]);
    digitalWrite(RightSolenoid[i], RightSol_Status[i]);
  }

  if (BTSerial.available())
  {   
    if(!Bluetooth)
    {
      Serial.println("Bluetooth connected");
      Bluetooth = 1;
    }
    DotData = ReceiveDot();
  }
  StoreDot(DotData,DataLength);

}

String ReceiveDot()   
{   
  String TempString = ""; 
  while(BTSerial.available()>0)   
  {   
    TempString = BTSerial.readStringUntil('F'); 
  }  
  DataLength = int(TempString[0])-48;
  return TempString;     
}

void StoreDot(String Ddata, int Dlength)
{
  int count = Dlength*6;
  int index = 1;
  while(count)
  {
    DataArray[index]=int(Ddata[index])-48;
    count -= 1;
    index += 1;
  }
}

void PrintDot()
{


}

void Reset()
{
  for(int i = 0; i < 55; i++)
  {
    DataArray[i] = 0;
  }
  Bluetooth = 0;
  DataLength = 0;
  delay(500);
  for(int i = 0; i < 6; i++)
  {
    digitalWrite(LeftSolenoid[i], HIGH);
    digitalWrite(RightSolenoid[i], HIGH);
  }
  delay(500);
  for(int i = 0; i < 6; i++)
  {
    digitalWrite(LeftSolenoid[i], LOW);
    digitalWrite(RightSolenoid[i], LOW);
  }
}
