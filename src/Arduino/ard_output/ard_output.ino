
#include <SoftwareSerial.h>

// SoftwareSerial(RX, TX), RX,TX는 핀번호
SoftwareSerial BTSerial(2, 3); 
// Solenoid모터 핀번호
int solenoidMotor_One = 1;
int solenoidMotor_Two = 2;
int solenoidMotor_Three = 3;
int solenoidMotor_Four = 4;
int solenoidMotor_Five = 5;
int solenoidMotor_Six = 6;

int dotArray[6];

void setup() {
  // put your setup code here, to run once:
  BTSerial.begin(9600); 
  pinMode(solenoidMotor_One, OUTPUT);
  pinMode(solenoidMotor_Two, OUTPUT);
  pinMode(solenoidMotor_Three, OUTPUT);
  pinMode(solenoidMotor_Four, OUTPUT);
  pinMode(solenoidMotor_Five, OUTPUT);
  pinMode(solenoidMotor_Six, OUTPUT);
  for(int i = 0; i < 6; i ++)
  {
    dotArray[i] = 0;
  }

}

void loop() {
  // put your main code here, to run repeatedly:
  if (BTSerial.available()){ // 블루투스로 데이터 수신
    dotReceive();
    dotPrint();
  }

}

//하드웨어에 점자 출력
void dotPrint(){
  for(int i = 0; i < 6; i ++)
  {
    if(dotArray[i]>0)
    {
      digitalWrite(dotArray[i], HIGH); 
    }
  }
}

//하드웨어 점자 리셋
void dotReset(){
  for(int i = 0; i < 6; i ++)
  {
    if(dotArray[i]>0)
    {
      digitalWrite(dotArray[i], LOW); 
      dotArray[i] = 0;
    }
  }
}

//스마트폰에서 점자데이터 수신
void dotReceive(){

}