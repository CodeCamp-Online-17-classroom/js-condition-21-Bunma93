// write code here
alert(null || 2 || undefined); //2(T)
alert(alert(1) || 2 || alert(3));//แสดง 1 แล้วคืนค่า undifined(F) แล้วแสดง 2(T)
alert(1 && null && 2);//null(F)
alert(alert(1) && alert(2));//แสดง 1 คืนค่า undifined(F) แสดง undifined(F)
alert(null || (2 && 3) || 4);//2(T) และ 3(T) คืนค่า 3(T) ออกมา
