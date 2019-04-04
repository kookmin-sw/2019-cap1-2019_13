#include <SoftwareSerial.h>
//SoftwareSerial mySerial(0, 1); // RX, TX
int command = 0;
int arr[6] = {11,12,13};
char Str[] = "";
int indx;
void setup()
{
  Serial.begin(9600);
  indx = 0;
  pinMode(13, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(11, OUTPUT);
}

void loop()
{

  if(Serial.available()){
    String inString = Serial.readStringUntil('\n');    
    //Str = Serial.readStringUntil('\n');    

    int x = inString.substring(0, 1).toInt();
 	int y = inString.substring(1, 2).toInt();
    int z = inString.substring(2, 3).toInt();
    Serial.println(inString);
    Serial.println(x);
    Serial.println(y);
    Serial.println(z);
    if(x==1){
      digitalWrite(11, HIGH);
    }
    if(y==2){
      digitalWrite(12, HIGH);
    }
    if(z==3){
      digitalWrite(13, HIGH);
    }
  } 
  //func1(Str);
}

int func1(char dd[])
{
  if(dd[2]=='3')
    digitalWrite(10,HIGH);
  
  return 0;
}