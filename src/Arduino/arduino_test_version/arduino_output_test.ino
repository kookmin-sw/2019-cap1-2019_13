#include <SoftwareSerial.h>

int SolenoidOne = 8;
int SolenoidTwo = 9;
int SolenoidThree = 10;
int SolenoidFour = 11;
int SolenoidFive = 12;
int SolenoidSix = 13;
char SolOneStatus = LOW;
char SolTwoStatus = LOW; 
char SolThreeStatus = LOW;
char SolFourStatus = LOW; 
char SolFiveStatus = LOW;
char SolSixStatus = LOW; 
int Tx = 2;
int Rx = 3;
int Bluetooth = 0;
SoftwareSerial BTSerial(Tx, Rx);   //bluetooth module Tx:Digital 2 Rx:Digital 3   

void setup() {
  Serial.begin(9600); //시리얼 통신 시작
  BTSerial.begin(9600); //블루투스 통신 시작
  pinMode(SolenoidOne, OUTPUT); 
  pinMode(SolenoidTwo, OUTPUT);
  pinMode(SolenoidThree, OUTPUT); 
  pinMode(SolenoidFour, OUTPUT);
  pinMode(SolenoidFive, OUTPUT); 
  pinMode(SolenoidSix, OUTPUT);
}

void loop() {
  
  String str;
  digitalWrite(SolenoidOne, SolOneStatus);
  digitalWrite(SolenoidTwo, SolTwoStatus);
  digitalWrite(SolenoidThree, SolThreeStatus);
  digitalWrite(SolenoidFour, SolFourStatus);
  digitalWrite(SolenoidFive, SolFiveStatus);
  digitalWrite(SolenoidSix, SolSixStatus);
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
