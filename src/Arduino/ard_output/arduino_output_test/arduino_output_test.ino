#include <SoftwareSerial.h>

int LeftSolenoid[6]={4,5,6,7,8,9};
int RightSolenoid[6]={10,11,12,13,14,15};

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
    pinMode(LeftSolenoid[i],OUTPUT);
    pinMode(RightSolenoid[i],OUTPUT);
    LeftSol_Status[i] = LOW;
    RightSol_Status[i] = LOW;
  }
}

void loop() {

  String str;
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
    str = readSerial();
  }

  if(str == "")
  {

  }
  else if(str=="1")
  {
    SolOneStatus = HIGH;
   
    Serial.println(str);
    Serial.println("Solenoid 1 UP");
  }
  else if(str=="2")
  {
    SolTwoStatus = HIGH;
    
    Serial.println(str);
    Serial.println("Solenoid 2 UP");
  }
  
  else if(str=="3")
  {
    SolThreeStatus = HIGH;
    Serial.println(str);
    Serial.println("Solenoid 3 UP");
  }
  else if(str=="4")
  {
    SolFourStatus = HIGH;
    Serial.println(str);
    Serial.println("Solenoid 4 UP");
  }
  else if(str=="5")
  {
    SolFiveStatus = HIGH;
    Serial.println(str);
    Serial.println("Solenoid 5 UP");
  }
  else if(str=="6")
  {
    SolSixStatus = HIGH;
    Serial.println(str);
    Serial.println("Solenoid 6 UP");
  }
  else if(str=="0")
  {
    SolOneStatus = HIGH;
    SolTwoStatus = HIGH;
    SolThreeStatus = HIGH;
    SolFourStatus = HIGH;
    SolFiveStatus = HIGH;
    SolSixStatus = HIGH;
    Serial.println(str);
    Serial.println("Solenoid All UP");
  }
  else if(str=="a")
  {
    SolOneStatus = LOW;
    Serial.println(str);
    Serial.println("Solenoid 1 DOWN");
  }
  else if(str=="b")
  {
    SolTwoStatus = LOW;
    Serial.println(str);
    Serial.println("Solenoid 2 DOWN");
  }
  else if(str=="c")
  {
    SolThreeStatus = LOW;
    Serial.println(str);
    Serial.println("Solenoid 3 DOWN");
  }
  else if(str=="d")
  {
    SolFourStatus = LOW;
    Serial.println(str);
    Serial.println("Solenoid 4 DOWN");
  }
  else if(str=="e")
  {
    SolFiveStatus = LOW;
    Serial.println(str);
    Serial.println("Solenoid 5 DOWN");
  }
  else if(str=="f")
  {
    SolSixStatus = LOW;
    Serial.println(str);
    Serial.println("Solenoid 6 DOWN");
  }
  else if(str=="g")
  {
    SolOneStatus = LOW;
    SolTwoStatus = LOW;
    SolThreeStatus = LOW;
    SolFourStatus = LOW;
    SolFiveStatus = LOW;
    SolSixStatus = LOW;
    Serial.println(str);
    Serial.println("Solenoid All DOWN");
  }
  else
  {
    Serial.println(str);
    Serial.println("error!");
  }
}

String readSerial()   
{   
   String strr = "";   
   char ch;   
   while( BTSerial.available() > 0 )   
   {   
      ch = BTSerial.read();   
      strr.concat(ch); 
   }  
   return strr;     
}
