#include <SoftwareSerial.h>

int LeftSolenoid[6]={4, 5, 6, 7, 8, 9};
int RightSolenoid[6]={10, 11, 12, 13, 14, 15};
int DataArray[55]={0};

char LeftSol_Status[6]={LOW};
char RightSol_Status[6]={LOW};

int Tx = 2;
int Rx = 3;
int DataLength = 0;
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
  for(int i = 0; i < 6; i++) //상태 업데이트
  {
    digitalWrite(LeftSolenoid[i], LeftSol_Status[i]);
    digitalWrite(RightSolenoid[i], RightSol_Status[i]);
  }

}

void loop() {
  String DotData = "";

  if (BTSerial.available())
  {   
    if(!Bluetooth)
    {
      Serial.println("Bluetooth connected");
      Bluetooth = 1;
    }
    DotData = ReceiveDot();

    Serial.print("Data Length : ");
    Serial.println(DataLength);

    StoreDot(DotData,DataLength);

    for(int i = 0; i < 6; i++)
    {
      Serial.print(DataArray[i]);
    }

    PrintDot(DataLength);
    ResetAll();
  }
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

void PrintDot(int Dlength)
{
  int DotSet = Dlength;
  for(int i = 0; i < Dlength; i++)
  {
    for(int j = 0; j < 6; j++)
    {
      if(DotSet/2==0 && DotSet!=0)
      {
        if(DataArray[i*6+j]==1)
          LeftSol_Status[j] = HIGH;
        else
          LeftSol_Status[j] = LOW;

        digitalWrite(LeftSolenoid[j], LeftSol_Status[j]);
      }
      else if(DotSet/2==1 && DotSet!=0)
      {
        if(DataArray[i*6+j]==1)
          RightSol_Status[j] = HIGH;
        else
          RightSol_Status[j] = LOW;
          
        digitalWrite(RightSolenoid[j], RightSol_Status[j]);
      }
    }
    DotSet -= 1;
    delay(1500);
  }
  Serial.println("Printing complete");
}

void ResetAll()
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
  Serial.println("Reset complete");
}
