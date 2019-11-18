# conditor

## Présentation

Ce plugin est propose une série d'instructions pour traiter (aligner les
affiliations avec le [RNSR](https://appliweb.dgri.education.fr/rnsr/)), requêter
les documents de l'API
[Conditor](https://wiki.conditor.fr/conditor/index.php/Conditor_en_bref).

## installation

```bash
npm install @ezs/core
npm install @ezs/conditor
```

## Scripts

```bash
$ ./bin/affAlign.js < data/1000-notices-conditor-hal.json | ./bin/compareRnsr.js
recall: 0.7162356321839081
correct: 997
total: 1392
```

> **Warning**: to use the scripts, you need to install `@ezs/basics` too.

## Règles certaines

Les règles certaines utilisées par [affAlign](#affAlign), appliquées à l'adresse
de l'affiliation à aligner sont les suivantes:

- le `code_postal` **ou** la `ville_postale` de la structure doivent être présents,
- **et**  pour au moins une des tutelles (`etabAssoc.*.etab`, et `etabAssoc.*.etab.natTutEtab` vaut `TUTE`):
  - soit `etabAssoc.*.etab.sigle` ou le `etabAssoc.*.etab.libelle` sont présents,
  - soit `etabAssoc.*.etab.libelle` commence par `Université` et le
    `etabAssoc.*.etab.libelle` est présent (mais pas le
    `etabAssoc.*.etab.sigle`).
- **et** on trouve la bonne structure:
  - soit `etabAssoc.*.label` et `etabAssoc.*.numero` sont présents proches et en séquence (ex: `GDR2945`, `GDR 2945` ou `GDR mot 2945`),
  - soit `sigle` est présent,
  - soit `intitule` est présent.

Sachant qu'on appauvrit (casse, accents) tous les champs.

## usage

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [RNSR](#rnsr)
-   [affAlign](#affalign)

### RNSR

### affAlign

Find the RNSR identifiers in the authors affiliation addresses.

Input file:

```json
[{
     "authors": [{
         "affiliations": [{
             "address": "GDR 2989 Université Versailles Saint-Quentin-en-Yvelines, 63009"
         }]
     }]
}]
```

Script:

```ini
[use]
plugin = basics
plugin = conditor

[JSONParse]
[affAlign]
[JSONString]
indent = true
```

Output:

```json
[{
     "authors": [{
         "affiliations": [{
             "address": "GDR 2989 Université Versailles Saint-Quentin-en-Yvelines, 63009",
             "conditorRnsr": ["200619958X"]
         }]
     }]
}]
```