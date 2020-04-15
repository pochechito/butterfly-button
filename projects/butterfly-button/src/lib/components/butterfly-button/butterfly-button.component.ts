import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-butterfly-button',
  templateUrl: "./butterfly-button.component.html",
  styles: [
    `
    @media screen and (min-width: 0px) and (max-width: 539px) {
      .bb-button {
        background-color: #082f55; }
      .bb-mutable {
        animation-duration: 1s;
        animation-name: amazonas; } }
    
    @media screen and (min-width: 540px) and (max-width: 719px) {
      .bb-button {
        background-color: #459df0; }
      .bb-mutable {
        animation-duration: 1s;
        animation-name: casanare; } }
    
    @media screen and (min-width: 720px) and (max-width: 959px) {
      .bb-button {
        background-color: #855547; }
      .bb-mutable {
        animation-duration: 1s;
        animation-name: caldas; } }
    
    @media screen and (min-width: 960px) and (max-width: 1139px) {
      .bb-button {
        background-color: #665530; }
      .bb-mutable {
        animation-duration: 1s;
        animation-name: antioquia; } }
    
    @media screen and (min-width: 1140px) and (max-width: 2000px) {
      .bb-button {
        background-color: #456879; }
      .bb-mutable {
        animation-duration: 1s;
        animation-name: guajira; } }
    
    @keyframes amazonas {
      from {
        border-radius: 0px; }
      to {
        border-radius: 10px; } }
    
    @keyframes casanare {
      from {
        margin-left: 10px; }
      to {
        margin-left: 0px; } }
    
    @keyframes caldas {
      from {
        margin-right: 10px; }
      to {
        margin-right: 0px; } }
    
    @keyframes antioquia {
      from {
        box-shadow: inset 0px 0px white; }
      to {
        box-shadow: inset 10px 0px grey; } }
    
    @keyframes guajira {
      from {
        border-radius: 0px; }
      50% {
        border-radius: 10px; }
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
