import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-butterfly-button',
  templateUrl: "./butterfly-button.component.html",
  // styleUrls: ["./butterfly-button.component/butterfly-button.component.css"]
  styles: [
    `.bb-button {
      color: white; }
    
    @media screen and (min-width: 0px) and (max-width: 539px) {
      .bb-button {
        background-color: #07551a; }
      .bb-mutable {
        animation-duration: 3s;
        padding: 5px;
        animation-name: amazonas; } }
    
    @media screen and (min-width: 540px) and (max-width: 719px) {
      .bb-button {
        background-color: #0b61b1; }
      .bb-mutable {
        animation-duration: 3s;
        padding: 5px;
        animation-name: casanare; } }
    
    @media screen and (min-width: 720px) and (max-width: 959px) {
      .bb-button {
        background-color: #853f2a; }
      .bb-mutable {
        animation-duration: 3s;
        padding: 5px;
        animation-name: caldas; } }
    
    @media screen and (min-width: 960px) and (max-width: 1139px) {
      .bb-button {
        background-color: #c49123; }
      .bb-mutable {
        animation-duration: 3s;
        padding: 5px;
        animation-name: antioquia; } }
    
    @media screen and (min-width: 1140px) and (max-width: 2000px) {
      .bb-button {
        background-color: #364e5a; }
      .bb-mutable {
        animation-duration: 3s;
        padding: 5px;
        animation-name: guajira; } }
    
    @keyframes amazonas {
      from {
        height: 0px; }
      50% {
        height: 50px; }
      to {
        height: 30px; } }
    
    @keyframes casanare {
      from {
        margin-left: 100px; }
      to {
        margin-left: 0px; } }
    
    @keyframes caldas {
      from {
        border-radius: 0px;
        box-shadow: 0px 0px white; }
      50% {
        border-radius: 10px;
        box-shadow: 0px 0px 10px 5px grey; }
      to {
        box-shadow: 0px 0px white;
        border-radius: 0px; } }
    
    @keyframes antioquia {
      from {
        box-shadow: 0px 0px white; }
      50% {
        box-shadow: 0px 0px 10px 10px grey; }
      to {
        box-shadow: 0px 0px white; } }
    
    @keyframes guajira {
      from {
        border-radius: 0px; }
      50% {
        border-radius: 20px; }
      to {
        border-radius: 0px; } }
    `
  ]
})
export class ButterflyButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
