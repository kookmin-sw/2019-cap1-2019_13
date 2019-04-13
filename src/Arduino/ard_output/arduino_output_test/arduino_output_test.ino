#include <SoftwareSerial.h>
#include <stdlib.h>

int SolenoidOne = 11;
int SolenoidTwo = 12;
int Switch = 9;
char SolOneStatus =LOW;
char SolTwoStatus =LOW; 
const int Tx = 2;
const int Rx = 3;

SoftwareSerial BTSerial(Tx, Rx);   //bluetooth module Tx:Digital 2 Rx:Digital 3   

void setup() {

  Serial.begin(9600);
  BTSerial.begin(9600);
  pinMode(SolenoidOne, OUTPUT);
  pinMode(SolenoidTwo, OUTPUT);
  pinMode(Switch,INPUT_PULLUP);
}

void loop() {
  String str;
  if (BTSerial.available())
  {
    Serial.print("Bluetooth connected");
    //Serial.print(BTSerial.read());
    digitalWrite(SolenoidOne, SolOneStatus);
    digitalWrite(SolenoidTwo, SolTwoStatus);
    str = readSerial();
  }
  //String str;
  //digitalWrite(SolenoidOne, SolOneStatus);
  //digitalWrite(SolenoidTwo, SolTwoStatus);
  //str = readSerial();
  if(str == "")
  {
    //Serial.println("empty string");  
  }
  else if(str=="s1 up")
  {
    Serial.println(str);
    Serial.println("Solenoid One UP");
    SolOneStatus = HIGH;
  }
  else if(str=="s2 up")
  {
    Serial.println(str);
    Serial.println("Solenoid Two UP");
    SolTwoStatus = HIGH;
  }
  else if(str=="3")
  {
    Serial.println(str);
    Serial.println("Solenoid One & Two UP");
    SolOneStatus = HIGH;
    SolTwoStatus = HIGH;
  }
  else if(str=="4")
  {
    Serial.println(str);
    Serial.println("Solenoid One DOWN");
    SolOneStatus = LOW;
  }
  else if(str=="5")
  {
    Serial.println(str);
    Serial.println("Solenoid Two DOWN");
    SolTwoStatus = LOW;
  }
  else
  {
    Serial.println(str);
    Serial.println("error!");
  }
  /*
  if (Serial.available())
  {
    char val;
    val = BTSerial.read();
    Serial.print(val);
    if(val=='a')
    {
      digitalWrite(Switch,HIGH);
    }
    BTSerial.write(Serial.read());
  }
  if(digitalRead(Switch)==LOW)
  {
    digitalWrite(Switch,HIGH);
    delay(100);
  }
  else
  {
    digitalWrite(11,LOW);
    delay(100);
  }*/
}

String readSerial()   
{   
   String str = "";   
   char ch;   

    while( Serial.available() > 0 )   
    {   
      ch = BTSerial.read();   
      str.concat(ch);   
      delay(10);  
    }   
    return str;     
}
