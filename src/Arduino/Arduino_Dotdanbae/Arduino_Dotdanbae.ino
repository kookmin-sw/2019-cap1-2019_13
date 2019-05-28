#include <SoftwareSerial.h>

int LeftSolenoid[6]={13, 12, 11, 10, 9, 8};
int RightSolenoid[6]={7, 6, 5, 4, 3, 2};
int DataArray[55]={0};

char LeftSol_Status[6]={LOW};
char RightSol_Status[6]={LOW};

int DataLength = 0;
int Bluetooth = 0;  

void setup() {
  Serial1.begin(9600); //블루투스 통신 시작
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
  if (Serial1.available())
  {   
    if(!Bluetooth)
    {
      Serial.println("Bluetooth connected");
      Bluetooth = 1;
    }
    DotData = ReceiveDot(); //수신 함수 실행

    Serial.println(DotData); //전체 데이터 확인
    Serial.println("Data Length : "); //데이터 길이 확인
    Serial.println(DataLength);

    StoreDot(DotData,DataLength);
    
    for(int j = 0; j < DataLength; j++)//시리얼 모니터로 데이터 확인
    {
      for(int i = 1; i <= 6; i++)
      {
        Serial.print(DataArray[j*6+i]);
      }
      Serial.println("");
    }

    PrintDot(DataLength); //출력 함수 실행
    ResetAll(); //초기화 함수 실행
    delay(2000); //딜레이 2초 설정
    Bluetooth = 0;
  }
}

String ReceiveDot()   
{   
  String TempString = ""; 

  while(Serial1.available()>0)   
  {   
    TempString = Serial1.readStringUntil('F'); 
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
  
  for(int i = 0; i < Dlength; i++)
  {
    
    for(int j = 0; j < 6; j++)
    {
      if(i%2==0)
      {
        if(DataArray[i*6+j+1]==1)
          LeftSol_Status[j] = HIGH;
        else
          LeftSol_Status[j] = LOW;
        digitalWrite(LeftSolenoid[j], LeftSol_Status[j]);
        Serial.println("Left!");
      }
      else if(i%2==1)
      {
        if(DataArray[i*6+j+1]==1)
          RightSol_Status[j] = HIGH;
        else
          RightSol_Status[j] = LOW;
        digitalWrite(RightSolenoid[j], RightSol_Status[j]);
        Serial.println("Right!");
      }
    }
    delay(8000);
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
  /*
  delay(1000);
  for(int i = 0; i < 6; i++)
  {
    digitalWrite(LeftSolenoid[i], HIGH);
    digitalWrite(RightSolenoid[i], HIGH);
  }
  delay(1000);
  for(int i = 0; i < 6; i++)
  {
    digitalWrite(LeftSolenoid[i], LOW);
    digitalWrite(RightSolenoid[i], LOW);
  }
  delay(700);
  */
  Serial.println("Reset complete");
}
