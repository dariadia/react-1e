import React, { useState, useEffect } from 'react'

// в приложении есть кнопка, если на нее нажать - таймер начинает считать
// на экране показывается счет таймера
// после 20 секунд - всплывает (window) alert - который говорит юзеру что угодно
// после чего таймер останавливается.

// *доп: в приложении есть и поле, 
// куда юзер может внести "сколько секунд", после истечения которых покажется alert
// поле скрывается, если юзер ввел число и таймер считает
// поле появляется снова, когда показался alert и таймер обнулился
