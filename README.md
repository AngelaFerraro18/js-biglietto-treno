# Biglietto del treno

L'esercitazione di oggi consiste nel creare un programmino dove, sulla base delle informazioni che chiederemo e riceveremo dall'utente, si dovrà calcolare il costo del biglietto a seconda di determinate condizioni. A seconda di quest'ultime, con le relative verifiche, il prezzo potrebbe variare a seconda dei dati che un ipotetico utente andrà a immettere nei campi. 

---

**Consegna**

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km).
- va applicato uno sconto del 20% per i minorenni.
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

---

*Ragionamento*

- chiedere all'utente quanti km vuole percorrere
- chiedere all'utente quanti anni ha
- il dato ottenuto sarà convertito in tipo: numero
- il prezzo del biglietto è = km determinati dall'utente per 0.21 € al km ( 1km = 0.21€)
- se l'utente è minorenne, allora avrà uno sconto del 20% sul prezzo
- se l'utente è over 65, allora avrà uno sconto del 40%
- il prezzo finale sarà stampato con massimo due decimali