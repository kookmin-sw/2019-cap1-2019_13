#include <SoftwareSerial.h>

int SolenoidOne = 11;
int SolenoidTwo = 12;
char SolOneStatus = LOW;
char SolTwoStatus = LOW; 
int Tx = 2;
int Rx = 3;
int Bluetooth = 0;
SoftwareSerial BTSerial(Tx, Rx);   //bluetooth module Tx:Digital 2 Rx:Digital 3   

void setup() {
  Serial.begin(9600); //시리얼 통신 시작
  BTSerial.begin(9600); //블루투스 통신 시작
  pinMode(SolenoidOne, OUTPUT); 
  pinMode(SolenoidTwo, OUTPUT);
}

void loop() {
  String str;
  digitalWrite(SolenoidOne, SolOneStatus);
  digitalWrite(SolenoidTwo, SolTwoStatus);
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
    //Serial.println("empty string");  
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
    SolOneStatus = HIGH;
    SolTwoStatus = HIGH;
    Serial.println(str);
    Serial.println("Solenoid 1 & 2 UP");
  }
  else if(str=="4")
  {
    SolOneStatus = LOW;
    Serial.println(str);
    Serial.println("Solenoid 1 DOWN");
  }
  else if(str=="5")
  {
    SolTwoStatus = LOW;
    Serial.println(str);
    Serial.println("Solenoid 2 DOWN");
  }
  else if(str=="6")
  {
    SolOneStatus = LOW;
    SolTwoStatus = LOW;
    Serial.println(str);
    Serial.println("Solenoid 1 & 2 DOWN");
  }
  else
  {
    Serial.println(str);
    Serial.println("error!");
  }
}

String readSerial()   
{   
   String str = "";   
   char ch;   
   while( BTSerial.available() > 0 )   
   {   
      ch = BTSerial.read();   
      str.concat(ch); 
   }  
   return str;     
}
