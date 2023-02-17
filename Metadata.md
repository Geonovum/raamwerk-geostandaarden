# Metadata

**Om data vindbaar te maken en in staat te zijn een eerste indruk te krijgen van haar toepasbaarheid voor een nieuw doel, moeten de gegevens in de geo-informatie infrastructuur worden beschreven. Karakteristieken van datasets, zoals de eigenaar en de actualiteit, leg je vast met behulp van metadata. Metadata wijst de weg in onze informatiehuishouding, helpt dubbele inwinning en beheer van data te verminderen en zorgt ervoor dat geo-informatie snel kan worden gevonden.**

## Overzicht geo-standaarden metadata

Er zijn verschillende niveaus waarop metadata aangemaakt kunnen worden. Metadata van data beschrijft de dataset of dataset reeks. Metadata van services, beschrijft de ‘service’ of API (WMS,WFS) waarmee (een) ruimtelijke dataset(s) wordt ontsloten. In Nederland passen we het Nederlands metadataprofiel voor datasets en services toe. Dit profiel is gebaseerd op de ISO 19115 voor data en ISO 19119 voor services en waar relevant aangevuld met OGC specificaties en specifieke behoeften van de gebruikers in Nederland. Met de Nederlandse profielen voor metadata, voldoe je ook aan de INSPIRE profielen voor metadata. 

In de Nederlandse metadataprofielen is ook de aansluiting op data.overheid.nl meegenomen. [Data.overheid.nl](https://data.overheid.nl/) is een datacatalogus, die de datasets gemakkelijk doorzoekbaar en vindbaar maakt. Om datasets overzichtelijk te kunnen presenteren en om gericht naar datasets te kunnen zoeken, worden datasets in data.overheid.nl beschreven met metadata conform de standaard DCAT. DCAT is een metadata standaard van W3C voor de beschrijving van datasets. 
Voor Europese portalen is het “DCAT Application Profile for Data Portals in Europe" (DCAT-AP) opgesteld. DCAT-AP maakt het mogelijk om datasetcollecties te beschrijven en om dergelijke beschrijvingen samen te voegen. Hierdoor kunnen gebruikers datasets gemakkelijker vinden vanaf één toegangspunt. DCAT-AP heeft een extensie GeoDCAT-AP voor het beschrijven van geodatasets, dataset series en services. Deze extensie is eveneens afgestemd op de INSPIRE kernset en de Nederlandse profielen. 

*Tabel 7.1 - Standaarden en specificaties met betrekking tot metadata standaarden*

| **Internationale standaarden/specificaties**                                                                                              | **Europese profielen**                                                                                           | **Nederlandse profielen**                                                   |
|-------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| ISO 19115:2003, Geographic information - Metadata1 [[ISO19115-2003]] |  Technical Guidance for the implementation of INSPIRE dataset and service metadata based on ISO/TS 19139:2007 [[inspire-TG-metadata]] | Nederlands profiel ISO 19115 voor geografie, versie 2.1.0 [[NLISO19115]] |
| ISO 19115/Cor.1:2006, Geographic information – Metadata, Technical Corrigendum 1 [[ISO19115-2006]]  |  | Nederlands profiel ISO 19119 voor services, versie 2.1.0 [[NLISO19119]]  |
| ISO 19115-2:2009, Geographic information – Metadata – Part 2: Extensions for imagery and gridded data [[ISO19115-2009]] | |  |
| ISO 19119:2005, Geographic information – Services [[ISO19119-2005]] |  |  |
| ISO 19119:2005/Amd 1:2008, Extensions of the service metadata model [[ISO19119-2008]] |  |  |
| ISO/TS 19139:2007, Geographic information - Metadata – XML Schema Implementation [[ISO19139]]  |  |  |
| Data Catalog Vocabulary (DCAT) version 2.0 [[vocab-dcat-2]] | DCAT-AP - An extension for the DCAT application profile for data portals in Europe version 2.1.1 [[DCAT-AP-2.1.1]]| 
| | GeoDCAT-AP - A geospatial extension for the DCAT application profile for data portals in Europe version 2.0.0 [[geodcat-ap]] | |

## Kwaliteit van metadata

**Handleiding Metadatakwaliteit**

Het kwaliteitsbeleid voor metadata is vastgelegd in de [Handleiding metadatakwaliteit](https://www.geonovum.nl/uploads/documents/Handleiding%20metadata%20monitoring%20v0.5.pdf). Met behulp van de handleiding kan aan de hand van 26 elementen, die in de metadata-standaarden zijn beschreven, de kwaliteit van metadata worden beoordeeld.

**Validatie**

Voor het toetsen van metadata zijn er validators beschikbaar. Deze validators controleren de correcte toepassing van het Nederlands metadata profiel voor datasets of voor services. De [validator Nederlands metadataprofiel op ISO 19115 en op ISO 19119](https://validatie.geostandaarden.nl/) valideert de metadata van respectivelijk datasets en services conform het Nederlands profiel. 

Voor metadata van datasets of services, die voor INSPIRE zijn aangemerkt, gelden er specifiekere vereisten. Gebruik daarvoor
naast de Nederlandse validator ook de [Europese INSPIRE validator](https://inspire.ec.europa.eu/validator/home/index.html) om metadata te valideren.

## Verkenning

Methoden en technieken om data te zoeken, vinden en ontsluiten staan niet stil. Eind 2021 is een verkenning uitgevoerd naar de toekomst van metadata standaarden. In de [Verkenning Toekomstbeelden Metadata](https://docs.geostandaarden.nl/vtm/cv-al-vrk-20211125/#d1e9) kijken we naar de rol van metadata in de nabije toekomst. In de verkenning tekent zich een ontwikkeling af naar meer samenhang en verbinding tussen verschillende metadata-werelden. Aansluiting op generieke standaarden en het leggen van relaties tussen data, modellen, begrippen en datacatalogi is daarom van belang. Ook het beter verbinden van data-aanbieder en data-gebruiker is een aandachtsgebied. 


