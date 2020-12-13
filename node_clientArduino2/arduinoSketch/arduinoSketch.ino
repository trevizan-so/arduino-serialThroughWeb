const int pinLed = 12;
const int ref0 = 0;
const int ref1 = 1;


void setup() {
  Serial.begin(9600);
  pinMode(pinLed,OUTPUT);
}

void loop() {
  digitalWrite(pinLed,HIGH);
  Serial.println(ref0);
  delay(500);
  digitalWrite(pinLed,LOW);
  Serial.println(ref1);
  delay(500);
}


https://github.com/trevizan-so/arduino-serialThroughWeb.git