import { Component } from '@angular/core';

@Component({
  selector: 'app-marquee',
  imports: [],
  templateUrl: './marquee.html',
  styleUrl: './marquee.css',
})
export class Marquee {
  readonly messages: string[] = [
    'В разработке',
    '공사 중',
    'Always under construction',
    'In costruzione',
    'निर्माणाधीन',
    'Yapım aşamasında',
    'Em construção',
    'Υπό κατασκευή',
    'Always under construction',
    'قيد الإنشاء',
    'Katika ujenzi',
    'Onder konstruksie',
    'Ginagawa pa',
    'อยู่ระหว่างการก่อสร้าง',
    'Be-megene',
    '工事中',
  ];
}
