# React und Redux - Schulung am 14. und 15.3.2019 (Nicole Rauch)

## React - Was ist das Besondere daran?

* JS Library zum Erstellen von User Interfaces (facebook)
  * nur UI, virtueller DOM
  * Data Flow: unidirektional ohne Event-Chaos,
  * Verarbeitung -> Daten -> Komponenten -> Verarbeitung
  * Änderungen auf der UI: neuzeichnen (flackern), DOM manipulieren
  * virtueller DOM: Entwickler beschreibt das Ergebnis, React aktualisiert DOM nur für die Änderungen
  * kein shadowe DOM, komplett interne React-Struktur
  * nur die UI: Model gehört nicht zu React, kann beliebig implementiert werden (z.B. immutable.js)
  
# Einführung in Typescript
* REPL: npx ts-node (https://github.com/TypeStrong/ts-node)

## Ecmascript 6
* Object Creation: _let obj = {x,y};_
* Assignment: _let {x,y} = {x:1, y:2};_ <= Objekt auf mehrere Variablen
* Parameters: _function takeObj({x,y}) {...}_ <= gut für Contract
* durch Compiliern von Typescript nach Javascript gehen alle Typescript spezifieschen Informationen wie Typen verloren
* Spread Operator: _const obj = {x:1, y:2}; const obj2 = { ...obj}; // identical to obj_ <= nur oberste Ebene, überschreiben einzelner Elemente möglich _const obj2 = { ...obj, x:42};_
* Arrow Functions: _() => something_ <= aus einem Statement wird nur die Expression verwendet (_function() { return something;}_ (bei mehreren Statements return verwenden)
* Expression kann immer einer Variable zugewiesen werden! (<=> Statement)
* eine Expression, die ein neues Objekt zurückgibt: _() => ({x:3});_

## Typescript
* Typen: 
  * primtive Typen (number, string, boolean, any, object, number[]) (number=integer oder float)
  * Typ anschauen: _.type x_
  * Aber (spezifische Primtive Typen): _const x=1; .type x => 1_
  * Typisierung von Funktionen, auch bei Arrow Functions
  * _const malZwei: (x:number) => number = x * 2;_ besser: _const malZwei = (x:number): number => x * 2;_
  * Rückgabetypen: void, never (=niemals regulärer Ausgang aus der Funktion, Exception wird geworfen)
  * Objekttypen: nix Konrektes => _let x: {a: number, b: boolean};_ <= aber keine Wiederverwendung
  * Interface: Wiederverwendung von Typen 
  * Enums: _enum Direction { Up=1, Down }_ <= weist automatisch Nummern zu, beginnend mit 0 (außer anderer Wert wird zugewiesen)
  * Generics: 
    * Generische Funktionen: _function identiy<T>(arg: T): T { }_
    * Generische Klassen: _class GenericNumber<T> {...}_
  * Fortgeschrittene Typen:
    * Intersection Types: _let student: Person & Student_ <= Variable von zwei Interfaces
    * Union Types: _let whatever: string | number_ <= nimmt Wert eines der aufgelisteten Typen an
* Neue Array-Funktionen
  * map, filter, find (liefert keine Array zurück, sondern Wert oder undefined), reduce (wie fold, liefert einen Wert zurück. Anfangswert möglich) 
* Modularisierung
  * export/import   
    * Konstanten: _export const A = 7;_ => _import * as consts from '...'; ... consts.A ..._
    * Default Export: _export default const = 39_ (nur einmal pro Datei!) => _import myName from..._
  * Deklaration: class, constructor, extends, super(), Methoden, Vorsicht mit this-Binding (Methodenbinding oder Array Functions verwenden)
  
## Kurze Einführung in Webpack                     
* Modul-Bundler: eine JS-Datei mit TS-Code und statischen Daten, Transformation(JS=>TS, SCSS=>CSS,...)
* Entwicklungsserver (watch, node.js Server, "Hot" Modulersetzung ohne Browser-Refresh)

## Einführung in React.js
* _import React, {Component} from "react"_
* render() muss überschrieben werden, beschreibt deklarativ das Aussehen der Komponente
* jsx: eingebettet.createElement() ersetzt werden.
* Stateless Functional Component: const HelloWorld = () => <p>hello</p>
* Entry-Points für die Anwendung (html und tsx) in webpack.config.js
    
## React.js testen mit Shallow Rendering I
* Jest: modular und flexibel
* Must.js: Assertion-Bibliothek, _const expect = require("must")
* Sinon.js: Mocks und Fake Server              
* shallow rendering: Testen von Komponenten ohne DOM
* Testen auf eine Komponente beschränken, nicht von Child-Components abhängig
* Enzyme: Essentielle Testing Library von airbnb, shallow rendering, full DOM rendering   
  * .text(): String-Representation der Textknoten
  * .html(): HTML-Representation (mit Kindknoten)
  * .name(): Name des aktuellen Knoten
  * .type(): Type des aktuellen Knoten
  
## React Developer Tools
* für Chrome und Firefox             
 
## Erstellen einer Benutzerverwaltung
* Datenübergabe mit _this.props.aPropName_
* Information nur innerhalb einer Komponente => Internal State der Komponente
* mit setState ändern => render wird angestoßen
* auf Clicks reagieren: _onClick={ () => doSomething }_
*
