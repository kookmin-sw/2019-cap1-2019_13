
#include <SoftwareSerial.h>

// SoftwareSerial(RX, TX), RX,TX는 핀번호
const int rxPin = 2;
const int txPin = 3;
SoftwareSerial BTSerial(rxPin, txPin); 
// Solenoid모터 핀번호
int solenoidMotor[6] = {0,1,2,3,4,5};
// 스마트폰에서 받을 점자데이터를 저장할 배열
int dotArray[6];
// 스마트폰에서 점자데이터가 string타입으로 올경우 저장해둘 변수
char Str[]="";

void setup() {
  // put your setup code here, to run once:
  BTSerial.begin(9600); 
  // 솔레노이드모터 연결
  for(int j = 0; j < 6; j ++)
    pinMode(solenoidMotor[j], OUTPUT);
  for(int i = 0; i < 6; i ++)
    dotArray[i] = 0;
}

void loop() {
  // put your main code here, to run repeatedly:
  if (BTSerial.available()){ // 블루투스로 데이터 수신
    dotReceive();
    delay(500);
    dotPrint();
  }
}

// 하드웨어에 점자 출력
void dotPrint(){
  for(int i = 0; i < 6; i ++)
  {
    if(dotArray[i]>0)
      digitalWrite(solenoidMotor[dotArray[i]], HIGH); 
  }
}

// 하드웨어 점자 리셋
void dotReset(){
  for(int i = 0; i < 6; i ++)
  {
    if(dotArray[i]>0)
    {
      digitalWrite(solenoidMotor[dotArray[i]], LOW); 
      dotArray[i] = 0;
    }
  }
}

// 스마트폰에서 점자데이터 수신
void dotReceive(){
  
}

// 스마트폰에서 string타입으로 전송될때 수신
void dotStringPrint(){

}