//-------------------------------------------------------------------------------------
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec  
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de 
//--              betreffende standaard. 
//-- Door. . . :  Jan van Gelder
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-- Log . . . :  20181015 - JvG - Initiele versie 
//-- Log . . . :  20191022 - GRK - Handreiking Archiveren ruimtelijke plannen v2.0      
//-------------------------------------------------------------------------------------

//-- Postprocessors -------------------------------------------------------------------

//-- haalt gh-pages weg aan het eind van een URL
//-- Stopt zodra de eerste is gevonden (want komt maar 1x voor)
//-- JvG 2019-11-12
function custGHPG(respecConfig)  
{
  var tags = document.getElementsByTagName("a");
  var srch = "gh-pages";
  var slen = srch.length;
  var i;

  for (i = 0; i < tags.length; i++) 
  {
    if(tags[i].href.indexOf(srch) > -1)
    {
      console.log(tags[i].href + " is gevonden");
      tags[i].href = tags[i].href.substring(0, tags[i].href.length - slen);
      console.log(tags[i].href + " is aangepast");
      break;
    }
  } 
}

//-------------------------------------------------------------------------------------
var respecConfig = 
{
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  //specStatus: "GN-BASIS",             // Basis Document
  specStatus: "GN-WV",                  // Werk Versie
  //specStatus: "GN-CV",                // Consultatie Versie
  //specStatus: "GN-VV",                // Vaststellings Versie
  //specStatus: "GN-DEF",               // Definitieve Versie
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                   // Norm
  //specType: "ST",                       // Standaard
  //specType: "IM",                   // Informatie Model
  //specType: "PR",                   // Praktijkrichtlijn
  specType: "HR",                   // HandReiking
  //specType: "WA",                   // Werkafspraak
  //specType: "BD",                   // Beheer Documentatie
  //-- format is verplicht! -----------------------------------------------------------
  format: "markdown",                 // altijd "markdown" - JvG W3C aangepast, op 1 plek markdown aangeven    
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2025-03-25",  	    // Format is "YYYY-MM-DD"
  //-- Repositorynaam op GitHub -------------------------------------------------------
  github: "https://github.com/geonovum/raamwerk-geostandaarden",
  //-- Repositorynaam/issues op GitHub ------------------------------------------------
  issueBase: "https://github.com/geonovum/raamwerk-geostandaarden/issues",
  //-- edDraftURI: de URI van de werkversie van het document
  // edDraftURI: "https://github.com/geonovum/raamwerk-geostandaarden",
  //-- de namen van de Editor(s) ------------------------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors: 
 [
    {
      name:       "Michel Grothe",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
  ],
  //-- de namen van de Author(s) ------------------------------------------------------
  //-- vul in: per Author: name:, company:, companyURL: -------------------------------
  authors: 
  [
    {
      name:       "Linda van den Brink ",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    },
    {
      name:       "Michel Grothe",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    },
    { name:       "Lennard Huisman",
      company:    "Kadaster",
      companyURL: 'http://www.kadaster.nl'
    },
    {      
      name:       "Paul Janssen",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
    {    
      name:       "Monique van Scherpenzeel",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl" 
    },
    {
      name:       "Ine de Visser",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    },
 ],
  //-- shortName is verplicht! (komt in de URL: kies logische naam) --------------------
  shortName: "rw",  	              // Wordt gebruikt in de document URL
  //-- pubDomain is verplicht! (komt in de URL: Activeer 1 van de volgende) ------------
  //pubDomain: "et", 	              // Energie transitie
  //pubDomain: "mim", 	            // Metamodel Informatie Modellering
  //pubDomain: "bor", 	            // Beheer Openbare Ruimte
  //pubDomain: "bro", 	            // Basisregistratie Ondergrond
  //pubDomain: "imgeo", 	          // IMGeo / BGT
  //pubDomain: "kl", 	              // Kabels en Leidingen
  //pubDomain: "liv", 	            // Landelijke Informatievoorziening Vastgoedgebruik
  //pubDomain: "md", 	              // Metadata
  pubDomain: "rwgs",                 // Raamwerk geostandaarden
  //pubDomain: "nen3610", 	        // Basismodel NEN3610
  //pubDomain: "oov", 	            // Openbare Orde en Veiligheid
  //pubDomain: "ro", 	              // Ruimtelijke Ordening
  //pubDomain: "serv", 	            // Services
  //pubDomain: "visu", 	            // Visualisatie
  //pubDomain: "wp", 	              // White Paper
  //-- license: voor de geldende gebruiksvoorwaarden
  //licence: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //licence: "cc0",                 // Public Domain Dedication
  licence: "cc-by",                 // Attribution, met bronvermelding
  
  //-- localBiblio: lokale bibliografie, voor verwijzigingen
  //-- NB: kijk eerst naar de beschikbare www.specref.org voor verwijziging 
  localBiblio: 
  {
    "NLISO19115":
      {
        title:      "Nederlands metadata profiel op ISO 19115 voor geografie versie 2.1.0",
        href:       "https://docs.geostandaarden.nl/md/mdprofiel-iso19115/",
        status:     "Vastgestelde versie",
        publisher:  "Geonovum",
        //editors:    ["M. Lupp"],
        date:       "30 juni 2020",
    },
    "NLISO19119":
      {
        title:      "Nederlands metadata profiel op ISO 19119 voor services versie 2.1.0",
        href:       "https://docs.geostandaarden.nl/md/mdprofiel-iso19119/",
        status:     "Vastgestelde versie",
        publisher:  "Geonovum",
        //editors:    ["M. Lupp"],
        date:       "30 juni 2020",
    },
    "ISO19115-2003": 
      {
        title:        "ISO 19115:2003  Geographic information -- Metadata",
        href:         "https://www.iso.org/standard/26020.html",
        status:       ["Adopted specification"],
        //authors:      [""],
        publisher:    "International Organization for Standardization",
        date:         "May 2003",
    },
    "ISO19115-2006":
      {
        title:        "ISO 19115:2003/Cor 1:2006 Geographic information — Metadata — Technical Corrigendum 1",
        href:         "https://www.iso.org/standard/26020.html",
        status:       ["Adopted specification"],
        //authors:      [""],
        publisher:    "International Organization for Standardization",
        date:         "June 2006",
    },
    "ISO19115-2009": 
      {
        title:        "ISO 19115-2:2009 Geographic information — Metadata — Part 2: Extensions for imagery and gridded data",
        href:         "https://www.iso.org/standard/39229.html",
        //status:       ["Adopted specification"],
        //authors:      [""],
        publisher:    "International Organization for Standardization",
        date:         "February 2009",
      },
    "ISO19119-2005": 
      {
        title:        "ISO 19119:2005 Geographic information — Services",
        href:         "https://www.iso.org/standard/39890.html",
        //status:       ["Adopted specification"],
        //authors:      [""],
        publisher:    "International Organization for Standardization",
        date:         "February 2005",
      },
      "ISO19119-2008": 
      {
        title:        "ISO 19119:2005/Amd 1:2008 Geographic information — Services — Amendment 1: Extensions of the service metadata model",
        href:         "https://www.iso.org/standard/44268.html",
        //status:       ["Adopted specification"],
        //authors:      [""],
        publisher:    "International Organization for Standardization",
        date:         "May 2008",
      },
	    "ISO19115-2014": 
      {
        title:        "ISO 19115-1:2014 Geographic information — Metadata — Part 1: Fundamentals",
        href:         "https://www.iso.org/standard/53798.html",
        //status:       ["Adopted specification"],
        //authors:      [""],
        publisher:    "International Organization for Standardization",
        date:         "April 2014",
      },
      "ISO19139":
      {
        title:        "ISO/TS 19139:2007 Geographic information — Metadata — XML schema implementation",
        href:         "https://www.iso.org/standard/32557.html",
        //status:       ["Adopted specification"],
        //authors:      [""],
        publisher:    "International Organization for Standardization",
        date:         "April 2007",
      },
      "ISO15836":
      {
        title:        "ISO 15836: 2004, Information and documentation - The Dublin Core metadata element set",
        href:         "https://www.iso.org/standard/37629.htm",
        //status:       ["Adopted specification"],
        //authors:      [""],
        publisher:    "International Organization for Standardization",
        date:         "2004",
      },
      "CSW2APISO": 
      {
        title:        "OpenGIS Catalogue Services Specification 2.0.2 - ISO Metadata Application Profile",
        href:         "http://portal.opengeospatial.org/files/?artifact_id=21460",
        status:       ["Adopted specification"],
        //authors:      [""],
        publisher:    "Open Geospatial Consortium",
        //date:         ["April 2007"],
    },
    "ISO19139": 
      {
        title:        "ISO/TS 19139:2007 Geographic information - Metadata - XML schema implementation",
        href:         "https://www.iso.org/standard/32557.html",
        status:       ["Adopted specification"],
        //authors:      [""],
        publisher:    "International Organization for Standardization",
        date:         "April 2007",
    },
    "inspire-irmd":
      {
        title:        "Implementing Rules for Metadata",
        href:         "http://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32008R1205",
        // status:       ["Legislation"],
         authors:      ["Drafting Team Metadata and European Commission Joint Research Centre"],
        publisher:    "European Commission Joint Research Centre",
        date:         "3 December 2008",
    },
    "inspire-cirmd":
    {
      title:        "Corrigendum to INSPIRE Metadata Regulation",
      href:         "https://eur-lex.europa.eu/legal-content/NL/TXT/PDF/?uri=CELEX:32008R1205R(02)&from=EN",
      // status:       ["Legislation"],
      authors:      ["Drafting Team Metadata and European Commission Joint Research Centre"],
      publisher:    "European Commission Joint Research Centre",
      date:         "15 January 2010",
    },
    "inspire-19115-19119":
      {
        title:        "INSPIRE Metadata Implementing Rules: Technical Guidelines based on EN ISO 19115 and EN ISO 19119",
        href:         "http://inspire.ec.europa.eu/documents/Metadata/INSPIRE_MD_IR_and_ISO_v1_2_20100616.pdf",
        //status:       ["Tehnical Guidance"],
        authors:      ["Drafting Team Metadata and European Commission Joint Research Centre"],
        publisher:    "European Commission Joint Research Centre",
        date:         "26 oktober 2007",
  },
	  "inspire-TG-metadata":
      {
	      title:        "Technical Guidance for the implementation of INSPIRE dataset and service metadata based on ISO/TS 19139:2007",
        href:         "https://github.com/INSPIRE-MIF/technical-guidelines/blob/2022.2/metadata/metadata-iso19139/metadata-iso19139.adoc",
        status:       ["Tehnical Guidance"],
        authors:      ["Temporary MIWP 2021-2024 sub-group 2.3.1"],
        publisher:    "INSPIRE Maintenance and Implementation Group (MIG)",
        date:         "1 augustus 2022",
  },
    "ISO19119":
      {
        title:        "Geographic information - Services",
        href:         "https://www.iso.org/standard/39890.html",
        //status:       ["Adopted specification"],
        //authors:      ["Drafting Team Metadata and European Commission Joint Research Centre"],
        publisher:    "International Organization for Standardization",
        date:         "2005-02",
    },
    "vocab-dcat-3":
    {
      title:        "Data Catalog Vocabulary (DCAT) - Version 3",
      href:         "https://www.w3.org/TR/vocab-dcat-3/",
      status:       "W3C Recommendation",
      //authors:      ["Drafting Team Metadata and European Commission Joint Research Centre"],
      publisher:    "W3C",
      date:         "22 August 2024",
  },
    "dcat-ap":
      {
        title:        "DCAT AP 3.0",
        href:         "https://semiceu.github.io/DCAT-AP/releases/3.0.0/",
        //status:       ["Adopted specification"],
        //authors:      ["Drafting Team Metadata and European Commission Joint Research Centre"],
        publisher:    "European Commission",
        date:         "14 June 2024",
    },
    "dcat-ap-hvd":
    {
        title:        "DCAT-AP High Value Datasets version 3.0.0",
        href:         "https://semiceu.github.io/DCAT-AP/releases/3.0.0-hvd",
        status:       "Semic Recommendation",
        //authors:    ["Drafting Team Metadata and European Commission Joint Research Centre"],
        publisher:    "European Commission",
        date:         "14 December 2023",
    },
    "dcat-ap-nl":
    {
        title:        "DCAT-AP-NL 3.0",
        href:         "https://docs.geostandaarden.nl/dcat/dcat-ap-nl30/",
        status:       "Vastgestelde versie",
        authors:      ["Ine de Visser", "Jan Skornsek"],
        publisher:    "Geonovum",
        date:         "12 december 2024",
    },
    "geodcat-ap":
    {
        title:        "GeoDCAT-AP 3.0.0",
        href:         "https://semiceu.github.io/GeoDCAT-AP/releases/3.0.0/",
        //status:       "",
        //authors:      "",
        publisher:    "European Commission",
        date:         "04 October 2024",
    },
    "SLD11":
      {
        title:        "OGC 05-078r4: Styled Layer Descriptor profile of the Web Map Service Implementation Specification, Version 1.1",
        href:         "http://portal.opengeospatial.org/files/?artifact_id=22364",
        status:       "Final version",
        publisher:    "Open Geospatial Consortium (OGC)",
        //editors:      ["M. Lupp"],
        date:         "2007-06-29",
    },
    "SE11":
      {
        title:      "OGC 05-077r4: OpenGIS Symbology Encoding Implementation Specification, version 1.1",
        href:       "https://portal.ogc.org/files/?artifact_id=16700",
        status:     "Final version",
        publisher:  "Open Geospatial Consortium (OGC)",
        //editors:    ["M. Müller"],
        date:       "2006-07-21",
    },
    "WMC11":
      {
        title:      "OpenGIS 05-005: Web Map Context Documents Implementation Specification, version 1.1",
        href:       "https://portal.ogc.org/files/?artifact_id=8618",
        status:     "Adopted specification",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    "J. Sonnet",
        date:       "2005-01-19",
    },
    "WMCC11":
      {
        title:      "OpenGIS 08-050: Corrigendum for OpenGIS Implementation Standard Web Map Context Documents - Corrigendum 1",
        href:       "https://portal.ogc.org/files/?artifact_id=27286",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    "T. Kralidis",
        date:       "2008-03-14",
    },
    "MBS":
      {
        title:      "Mapbox GL JS Style Specification",
        href:       "https://docs.mapbox.com/mapbox-gl-js/style-spec/",
        status:     "Unofficial",
        publisher:  "Mapbox",
    },
    "OAPISTYLES":
      {
        title:      "OGC 20-009: OGC API Styles",
        href:       "http://docs.opengeospatial.org/DRAFTS/20-009.html",
        status:     "Draft",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    "C. Portele",
    },
    "3DTILES":
      {
        title:      "3D Tiles Specification 1.1",
        href:       "http://www.opengis.net/doc/cs/3D-Tiles/1.1",
        status:     "Approved for pubic release",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Patrick Cozzi", "Sean Lilley"],
        date:       "2022-12-17",
    },
    "HRTOEG":
      {
        title:      "Handreiking digitaal toegankelijk locatiedata",
        href:       "https://docs.geostandaarden.nl/visu/toeg/",
        status:     "Vastgesteld",
        publisher:  "Geonovum",
        editors:    ["Edward Mac Gillavry", "Sjors Slaats", "Theo OVerduin","Thijs Brentjens", "Victor Zuydweg"],
        date:       "2021-08-02",
    },
    "HRWC":
      {
        title:      "Handreiking webcartografie",
        href:       "https://www.geonovum.nl/uploads/standards/downloads/handreiking%20webcartografie%201.0.1_0.pdf",
        status:     "Definitief",
        publisher:  "Geonovum",
        date:       "2010-11-18",
    },
    "HR3DT":
    {
      title:      "Handreiking 3d Tiling",
      href:       "https://docs.geostandaarden.nl/3d/3d-tiling/",
      status:     "Levend document",
      publisher:  "Geonovum",
      editors:    ["Arnoud de Boer", "Michel Grothe"],
      date:       "13 januari 2025",
    },
    "HRCRS":
      {
        title:      "Handreiking Gebruik coördinaatreferentiesystemen bij uitwisseling en visualisatie van geo-informatie",
        href:       "https://docs.geostandaarden.nl/crs/crs/",
        status:     "Definitief",
        publisher:  "Geonovum",
        editors:    ["Friso Penninga", "Lennard Huisman"],
        date:       "14 maart 2022",
    },
    "HRLFG":
      {
        title:      "Geometrie in uitwisselingsformaten",
        href:       "https://docs.geostandaarden.nl/g4w/geox/#inleiding",
        status:     "Definitief",
        publisher:  "Geonovum",
        editors:    ["Linda van den Brink", "Gabriella Wiersma"],
        date:       "4 februari 2022",
      },
      "HRWW3D":
      {
        title:      "Wegwijzer 3D standaarden",
        href:       "https://docs.geostandaarden.nl/3d/hr-3d-standaarden/",
        status:     "Vastgestelde versie",
        publisher:  "Geonovum",
        editors:    ["Yneke van Iersel", "Linda van den Brink"],
        date:       "28 januari 2025",
      },
    "INSTGVS":
      {
        title:      "Technical Guidance for the implementation of Inspire View Service",
        href:       "https://inspire.ec.europa.eu/documents/technical-guidance-implementation-inspire-view-services-1",
        status:     "Definitief",
        publisher:  "IOC TF",
        date:       "2022-08-01",
    },
    "NLWMS":
      {
        title:      "Nederlands profiel op ISO 19128 Geographic information — Web Map Server Interface",
        href:       "https://www.geonovum.nl/uploads/documents/nederlands_profiel_op_iso_19128_wms_1.3_-_versie_1.0.pdf",
        status:     "Vastgesteld",
        publisher:  "Geonovum",
        date:       "2015-04-24",
    }, 
    "NLAPIS":
     {
        title:      "API Strategie Algemeen (Nederlandse API Strategie I)",
        href:       "https://docs.geostandaarden.nl/api/API-Strategie/",
        status:     "Vastgesteld",
        publisher:  "Geonovum",
        date:       "9 maart 2022",
    },
    "OAPIMAPS":
      {
        title:      "OGC 20-058: OGC API - Maps - Part 1: Core, Version 1.0",
        href:       "http://www.opengis.net/doc/IS/ogcapi-maps-1/1.0",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    "Joan Masó, Jérôme Jacovella-St-Louis",
        date:       "2024-06-12",
    },
    "WFS11":
      {
        title:      "Web Feature Service Implementation Specification with Corrigendum, Version 1.1.3",
        href:       "http://docs.opengeospatial.org/is/04-094r1/04-094r1.html",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    "Panagiotis A. Vretanos",
        date:       "2016-10-26",
    },
    "INSTGDS":
      {
        title:      "Technical Guidance for the implementation of Inspire Download Services",
        href:       "https://inspire.ec.europa.eu/documents/technical-guidance-implementation-inspire-download-services",
        status:     "Approved",
        publisher:  "IOC TF",
        //editors:    "",
        date:       "2013-08-09",
    },
    "NLWFS":
      {
        title:      "Nederlands profiel op ISO 19142 Geographic information — Web Feature Service, Versie 1.1",
        href:       "https://www.geonovum.nl/geo-standaarden/services/nederlands-wfs-profiel-11-op-iso-19142-voor-web-feature-services-20",
        status:     "Definitief",
        publisher:  "Geonovum",
        //editors:    "",
        date:       "2015-04-24",
    },
    "INSGPOAPIF":
      {
        title:      "OGC API - Features as an INSPIRE download service",
        href:       "https://inspire.ec.europa.eu/good-practice/ogc-api-%E2%80%93-features-inspire-download-service",
        status:     "Endorsed Good Practice",
        publisher:  "IOC TF",
        //editors:    "",
        //date:       "2015-04-24",
    },
    "FE20":
      {
        title:      "OGC 09-026r2: OGC Filter Encoding 2.0 Encoding Standard - With Corrigendum, Version 2.0.3",
        href:       "http://docs.opengeospatial.org/is/09-026r2/09-026r2.html",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    "Panagiotis (Peter) A. Vretanos",
        date:       "2014-08-18",
    },
    "OAPIF1":
      {
        title:      "OGC 17-069r4: OGC API - Features - Part 1: Core corrigendum, Version 1.0.1",
        href:       "https://docs.opengeospatial.org/is/17-069r4/17-069r4.html",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Panagiotis (Peter) A. Vretanos","Clemens Portele","Charles Heazel"],
        date:       "2022-05-11",
    },
    "OAPIF2":
      {
        title:      "OGC 18-058: OGC API - Features - Part 2: Coordinate Reference Systems by Reference corrigendum, Version 1.0.1",
        href:       "http://www.opengis.net/doc/IS/ogcapi-features-2/1.0.1",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Panagiotis (Peter) A. Vretanos","Clemens Portele"],
        date:       "2022-04-05",
    },
    "OAPIF3":
      {
        title:      "OGC 19-079r1: OGC API - Features - Part 3: Filtering, Version 1.0",
        href:       "http://www.opengis.net/doc/IS/ogcapi-features-3/1.0",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Panagiotis (Peter) A. Vretanos","Clemens Portele"],
        date:       "2024-05-23",
    },
    "OAPIF4":
      {
        title:      "OGC 20-002: OGC API - Features - Part 4: Create, Replace, Update and Delete, Version 1.0.0 snapshot (editor's draft",
        href:       "http://docs.ogc.org/DRAFTS/20-002.html",
        status:     "Draft",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Panagiotis (Peter) A. Vretanos","Clemens Portele"],
        //date:       "2022-05-11",
    },
    "adr-mod-geo":
      {
        title:      "API Design rules Module: Geospatial",
        href:       "https://docs.geostandaarden.nl/api/API-Strategie-mod-geo/",
        status:     "Vastgestelde versie",
        publisher:  "Geonovum",
        editors:    ["Linda van den Brink"],
        authors:    ["Pieter Bresters", "Linda van den Brink", "Paul van Genuchten", "George Mathijssen", "Mark Strijker"],
        date:       "23 mei 2023",
    },
    "WCS21":
      {
        title:      "OGC 17-089r1: OGC Web Coverage Service (WCS) 2.1 Interface Standard - Core",
        href:       "http://docs.opengeospatial.org/is/17-089r1/17-089r1.html",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        date:       "2018-08-16",
    },
    "INSTGDSWCS":
      {
        title:      "Technical Guidance for the implementation of Inspire Download Services using Web Coverage Services (WCS), version 1.0",
        href:       "https://inspire.ec.europa.eu/id/document/tg/download-wcs",
        status:     "Approved",
        publisher:  "INSPIRE Maintenance and Implementation Group (MIG)",
        date:       "2016-12-16",
    },
    "OREFCO":
      {
        title:      "OGC Abstract Specification Topic 2: Referencing by coordinates",
        href:       "http://docs.opengeospatial.org/as/18-005r4/18-005r4.html",
        status:     "OGC® Publicly Available Standard",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Roger Lott"],
        date:       "2019-02-08",
    },
    "OAPIC":
      {
        title:      "OGC 19-087: OGC API - Coverages - Part 1: Core, version 0.0.7",
        href:       "http://docs.ogc.org/DRAFTS/19-087.html",
        status:     "Draft",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Charles Heazel", "Jerome St-Louis"],
        //date:       "2018-08-16",
    },
    "INSTGDSSOS":
      {
        title:      "Technical Guidance for implementing download services using the OGC Sensor Observation Service and ISO 19143 Filter Encoding, version 1.0",
        href:       "https://inspire.ec.europa.eu/id/document/tg/download-sos",
        status:     "Approved",
        publisher:  "INSPIRE Maintenance and Implementation Group (MIG)",
        //editors:    ["Charles Heazel", "Jerome St-Louis"],
        date:       "2016-12-16",
    },
    "STAS":
      {
        title:      "OGC 18-088: OGC SensorThings API Part 1 - Sensing, Version 1.1",
        href:       "https://docs.ogc.org/is/18-088/18-088.html",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Steve Liang","Tania Khalafbeigi", "Hylke van der Schaaf"],
        date:       "2021-08-04",
    },
    "STAT":
      {
        title:      "OGC 17-079r1: OGC SensorThings API Part 1 - Tasking Core, Version 1.0",
        href:       "http://docs.opengeospatial.org/is/17-079r1/17-079r1.html",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Steve Liang","Tania Khalafbeigi"],
        date:       "2019-01-08",
    },    
    "INSGPSTA":
      {
        title:      "OGC SensorThings API as an INSPIRE download service",
        href:       "https://inspire.ec.europa.eu/good-practice/ogc-sensorthings-api-inspire-download-service",
        status:     "Endorsed good practice",
        publisher:  "INSPIRE Maintenance and Implementation Group (MIG)",
        //editors:    ["Steve Liang","Tania Khalafbeigi"],
        //date:       "2019-01-08",
    },
    "OAPIEDR":
      {
        title:      "OGC API - Environmental Data Retrieval Standard, Version 1.1",
        href:       "http://www.opengis.net/doc/IS/ogcapi-edr-1/1.1",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Mark Burgoyne","David Blodgett","Charles Heazel","Chris Little"],
        date:       "2022-09-30",
    },
    "INSTGDiS":
      {
        title:      "Technical Guidance for the implementation of Inspire Discovery Service, version 3.1",
        href:       "https://inspire.ec.europa.eu/documents/technical-guidance-implementation-inspire-discovery-services-0",
        status:     "Approved",
        publisher:  "IOC TF",
        //editors:    ["Steve Liang","Tania Khalafbeigi"],
        date:       "2011-11-07",
    },
    "CSWISOAP":
      {
        title:      "OGC 07-045r2: OGC Catalogue Services Specification 2.0.2 - ISO Metadata Application Profile: Corrigendum, version 1.0.2",
        href:       "https://portal.ogc.org/files/80534",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Uwe Voges","Kristian Senkler"],
        date:       "2020-11-19",
    },
    "OAPIRECORDS1":
      {
        title:      "OGC 20-224: OGC API - Records - Part 1: Core",
        href:       "http://docs.ogc.org/DRAFTS/20-004.html",
        status:     "Draft",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Panagiotis (Peter) A. Vretanos", "Tom Kralidis", "Charles Heazel"],
        date:       "2020-01-13",
    },
    "OAPITILES1":
      {
        title:      "OGC 20-057: OGC API - Tiles - Part 1: Core",
        href:       "https://docs.ogc.org/is/20-057/20-057.html",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Joan Masó", "Jérôme St-Louis"],
        date:       "26-08-2022",
    },
    "I3S":
      {
        title:      "OGC Indexed 3d Scene Layer (I3S) and Scene Layer Package (*.slpk) Format Community Standard Version 1.3",
        href:       "http://www.opengis.net/doc/CS/i3s/1.3",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Carl Reed", "Tamrat Belayneh"],
        date:       "2022-12-12",
    },
    "GEOSPARQL11":
      {
        title:      "OGC GeoSPARQL - A Geographic Query Language for RDF Data Version 1.1",
        href:       "http://www.opengis.net/doc/IS/geosparql/1.1",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Nicholas J. Car", "Timo Homburg", "Matthew Perry", "Frans Knibbe", "Simon J.D. Cox", "Joseph Abhayaratna", "Mathias Bonduel, Paul J. Cripps, Krzysztof Janowicz"],
        date:       "2024-01-29",
    },
    "NLDP":
      {
        title:      "NEN 3610 - Linked Data",
        href:       "https://docs.geostandaarden.nl/nen3610/nldp/",
        status:     "Vastgesteld",
        publisher:  "Geonovum",
        editors:    ["Paul Janssen"],
        authors:    ["Linda van den Brink", "Marco Brattinga", "Marinus Vonhof", "Niels Hoffmann", "Pano Maria", "Hans Schevers", "Ronald van Lanen", "Joep van Genuchten"],
        date:       "2020-03-23",
    },
    "MIM":
      {
        title:      "MIM - Metamodel Informatie Modellering",
        href:       "https://docs.geostandaarden.nl/mim/mim/",
        status:     "Vastgesteld",
        publisher:  "Geonovum",
        editors:    ["Dick Krijtenburg", "Paul Janssen", "Lennart van Bergen"],
        authors:    ["Lennart van Bergen","Thies Mesdag", "Marco Brattinga","Paul Janssen", "Pano Maria", "Johan Boer"],
        date:       "2022-02-17",
    },
    "NEN3610": 
      {  
        title:      "NEN 3610:2022 nl - BBasismodel geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten",
        href:       "https://www.nen.nl/nen-3610-2022-nl-296137",
        status:     "Definitief",
        publisher:  "NEN",
        date:       "1 jun. 2022",
    },
    "ISO19107-2003":
      {
        title:      "ISO 19107:2019 Geographic information — Spatial schema",
        href:       "https://www.iso.org/standard/66175.html",
        status:     "Published",
        publisher:  "ISO",
        //editors:    ["Dick Krijtenburg", "Paul Janssen", "Lennart van Bergen"],
        //authors:    ["Lennart van Bergen","Thies Mesdag", "Marco Brattinga","Paul Janssen", "Pano Maria", "Johan Boer"],
        date:       "2019-12",
    },
    "iso19126-2009": 
      {
        title:        "ISO 19126:2009 Geographic information - Feature concept dictionaries and registers",
        href:         "https://www.iso.org/standard/44875.html",
        status:       "Published",
        publisher:    "ISO",
        date:         "2009-11",
    },
    "isots19127": 
    {
      title:        "ISO/TS 19127:2005- Geographic information — Geodetic codes and parameters",
      href:         "https://www.iso.org/standard/41784.html",
      status:       "Published",
      publisher:    "ISO",
      date:         "2005-06",
    },
    "iso19101": 
    {
        title:        "ISO 19101-1:2014 Geographic information — Reference model — Part 1: Fundamentals",
        href:         "https://www.iso.org/standard/59164.html",
        status:       "Published",
        publisher:    "ISO",
        date:         "November 2014",
    },
    "iso19103": 
      {
        title:        "ISO 19103:2015 Geographic information — Conceptual schema language",
        href:         "https://www.iso.org/standard/56734.html",
        status:       "Published",
        publisher:    "ISO",
        date:         "December 2015",
    },
    "iso19107": 
      {
        title:        "ISO 19107:2019 Geographic information — Spatial schema",
        href:         "https://www.iso.org/standard/66175.html",
        status:       "Published",
        publisher:    "ISO",
        date:         "December 2019",
    },
    "iso19108": 
      {
        title:        "ISO 19108:2002 Geographic information — Temporal schema",
        href:         "https://www.iso.org/standard/26013.html",
        status:       "Published",
        publisher:    "ISO",
        date:         "12-9-2012",
    },
    "iso19109": 
      {
        title:        "ISO 19109:2015 Geographic information — Rules for application schema",
        href:         "https://www.iso.org/standard/59193.html",
        status:       "Published",
        publisher:    "ISO",
        date:         "December 2015",
    },
    "iso19110": 
      {
        title:        "ISO 19110:2016 Geographic information — Methodology for feature cataloguing",
        href:         "https://www.iso.org/standard/57303.html",
        status:       "Published",
        publisher:    "ISO",
        date:         "December 2016",
    },
    "iso19111":
      {
        title:        "ISO 19111:2019 Geographic information — Referencing by coordinates",
        href:         "https://www.iso.org/standard/74039.html", 
        status:       "Published",
        publisher:    "ISO",
        date:         "January 2019",
    },
    "iso19117":
      {
        title:        "ISO 19117:2012 Geographic Information - Portrayal",
        href:         "https://www.iso.org/standard/46226.html", 
        status:       "Published",
        publisher:    "ISO",
        date:         "December 2012",
    },
    "iso19118":
      {
        title:        "ISO 19118:2011 Geographic information — Encoding",
        href:         "https://www.iso.org/standard/44212.html", 
        status:       "Published",
        publisher:    "ISO",
        date:         "Oktober 2011",
    },
    "iso19131": 
      {
        title:        "ISO 19131:2022 Geographic information — Data product specifications",
        href:         "https://www.iso.org/standard/85092.html",
        status:       "Published",
        publisher:    "ISO",
        date:         "November 2022",
    },
    "iso19136": 
      {
        title:        "ISO 19136-1:2020 Geographic information — Geography Markup Language (GML) — Part 1: Fundamentals",
        href:         "https://www.iso.org/standard/75676.html",
        status:       "Published",
        publisher:    "ISO",
        date:         "January 2020", 
    },
    "isots19127": 
      {
        title:        "ISO/TS 19127 Geographic Information - Geodetic codes and parameters",
        href:         "https://www.iso.org/standard/41784.html",
        status:       "Published",
        publisher:    "ISO",
        date:         "June 2005",
    },
    "iso6709": 
      {
        title:        "ISO 6709:2022 Standard representation of geographic point location by coordinates",
        href:         "https://www.iso.org/standard/75147.html",
        status:       "Published",
        publisher:    "ISO",
        date:         "September 2022",
    }, 
      "epsg": 
      {
        title:        "EPSG Geodetic Parameter Dataset",
        href:         "https://epsg.org/home.html",
        status:       "Published",
        publisher:    "Geodesy Subcommittee of the IOGP Geomatics Committee",
        //date:         "June 2005",
    },
    "inspire-gcm":
      {
        title:        "Generic Conceptual Model of the INSPIRE data specifications",
        href:         "https://inspire.ec.europa.eu/documents/inspire-generic-conceptual-model",
        status:       "Published",
        //authors:    ["INSPIRE Drafting Team Data Specifications"],
        publisher:    "INSPIRE Drafting Team Data Specifications",
        date:         "April 8, 2014",
    },
    "inspire-mds":
      {
        title:        "Methodology for the development of data specifications: baseline version (D 2.6, Version 3.0)",
        href:         "https://inspire.ec.europa.eu/documents/methodology-development-data-specifications-baseline-version-d-26-version-30",
        status:       "Published",
        //authors:    ["INSPIRE Drafting Team Data Specifications"],
        publisher:    "INSPIRE Drafting Team Data Specifications",
        date:         "April 7, 2008",
    },
    "inspire-gen":
      {
        title:      "Guidelines for the encoding of spatial data",
        href:       "https://inspire.ec.europa.eu/documents/guidelines-encoding-spatial-data",
        status:     "Published",
        publisher:  "INSPIRE Drafting Team Data Specifications",
        //editors:    ["Dick Krijtenburg", "Paul Janssen", "Lennart van Bergen"],
        //authors:    ["Lennart van Bergen","Thies Mesdag", "Marco Brattinga","Paul Janssen", "Pano Maria", "Johan Boer"],
        date:       "2014-04-08",
    },
    "inspire-ggs":
      {
        title:      "Guidelines INSPIRE Data Specification on Geographical Grid Systems - Technical Guidelines",
        href:       "https://inspire.ec.europa.eu/id/document/tg/gg",
        status:     "Published",
        publisher:  "INSPIRE Thematic Working Group Coordinate Reference Systems & Geographical Grid Systems",
        //editors:    ["Dick Krijtenburg", "Paul Janssen", "Lennart van Bergen"],
        //authors:    ["Lennart van Bergen","Thies Mesdag", "Marco Brattinga","Paul Janssen", "Pano Maria", "Johan Boer"],
        date:       "April 17, 2014",
    },
      "inspire-crs":
        {
          title:      "INSPIRE Data Specification on Coordinate Reference Systems - Technical Guidelines",
          href:       "https://inspire.ec.europa.eu/id/document/tg/rs",
          status:     "Published",
          publisher:  "INSPIRE Thematic Working Group Coordinate Reference Systems & Geographical Grid Systems",
          //editors:    ["Dick Krijtenburg", "Paul Janssen", "Lennart van Bergen"],
          //authors:    ["Lennart van Bergen","Thies Mesdag", "Marco Brattinga","Paul Janssen", "Pano Maria", "Johan Boer"],
          date:       "April 17, 2014",
    },
    "GML31":
      {
        title:      "OpenGIS® Geography Markup Language (GML) Implementation Specification, v3.1.1",
        href:       "https://portal.ogc.org/files/?artifact_id=4700",
        status:     "Published",
        publisher:  "Open Geospatial Consortium",
        editors:    ["Simon Cox", "Paul Daisey", "Ron Lake", "Clemens Portele", "Arliss Whiteside"],
        //authors:    ["Lennart van Bergen","Thies Mesdag", "Marco Brattinga","Paul Janssen", "Pano Maria", "Johan Boer"],
        date:       "2004-02-07",
    },
    "GML33":
      {
        title:      "OGC® Geography Markup Language (GML) — Extended schemas and encoding rules, v3.3",
        href:       "https://portal.ogc.org/files/?artifact_id=46568",
        status:     "Published",
        publisher:  "Open Geospatial Consortium",
        editors:    ["Clemens Portele"],
        //authors:    ["Lennart van Bergen","Thies Mesdag", "Marco Brattinga","Paul Janssen", "Pano Maria", "Johan Boer"],
        date:       "2012-02-07",
    },
    "GeoPackage":
      {
        title:      "OGC GeoPackage Encoding Standard version 1.4.0",
        href:       "https://www.geopackage.org/spec140/",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium",
        editors:    ["Jeff Yutzler"],
        //authors:    ["Lennart van Bergen","Thies Mesdag", "Marco Brattinga","Paul Janssen", "Pano Maria", "Johan Boer"],
        date:       "2023-12-05",
    },
    "INSGPGeopackage":
      {
        title:      "GeoPackage encoding of INSPIRE datasets. INSPIRE good practise",
        href:       "https://inspire.ec.europa.eu/good-practice/geopackage-encoding-inspire-datasets",
        status:     "Candidate",
        publisher:  "INSPIRE",
        //editors:    ["Jeff Yutzler"],
        //authors:    ["Lennart van Bergen","Thies Mesdag", "Marco Brattinga","Paul Janssen", "Pano Maria", "Johan Boer"],
        //date:       "2021-11-16",
    },
    "JSON-FG":
      {
        title:      "OGC Features and Geometries JSON - Part 1: Core version 0.2.2",
        href:       "https://portal.ogc.org/files/107269",
        status:     "Draft",
        publisher:  "Open Geospatial Consortium",
        editors:    ["Clemens Portele", "Panagiotis (Peter) A. Vretanos"],
        //authors:    ["Lennart van Bergen","Thies Mesdag", "Marco Brattinga","Paul Janssen", "Pano Maria", "Johan Boer"],
        //date:       "2012-02-07",
    },
    "GIMEG": 
      {
        href:      "https://docs.geostandaarden.nl/nen3610/gimeg",
        publisher: "Geonovum", 
        status:    "Vastgesteld",
        authors:   ["Linda van den Brink", "Paul Janssen", "Wilko Quak",],
        title:     "Geometrie in model en GML",
        date:      "2021-03-26",
    },
    "GMLSF": 
      {
        title:    "Geography Markup Language (GML) simple features profile (with Corrigendum) (2.0)",
        href:     "https://portal.ogc.org/files/?artifact_id=42729",
        status:   "Published",
        publisher:"Open Geospatial Consortium",
        editors:  ["Linda van den Brink", "Clemens Portele", "Panagiotis (Peter) A. Vretanos",],
        date:     "2012-04-05",
    },
    "NETCDF": 
      {
        title:    "OGC Network Common Data Form (NetCDF) Core Encoding Standard version 1.0",
        href:     "https://portal.ogc.org/files/?artifact_id=43732",
        status:   "Published",
        publisher:"Open Geospatial Consortium",
        editors:  ["Ben Domenico"],
        date:     "2011-04-05",
    },
    "HDF5": 
      {
        title:    "OGC Hierarchical Data Format Version 5 (HDF5®) Core Standard",
        href:     "http://docs.opengeospatial.org/is/18-043r3/18-043r3.html",
        status:   "Published",
        publisher:"Open Geospatial Consortium",
        editors:  ["Aleksandar Jelenak", "Ted Habermann", "Gerd Heber"],
        date:     "2019-03-27",
    },
    "HDFEOS": 
      {
        title:    "HDF-EOS5 Data Model, File Format and Library (v1.1)",
        href:     "https://www.earthdata.nasa.gov/sites/default/files/imported/ESDS-RFC-008-v1.1.pdf",
        status:   "Recommended",
        publisher:"NASA",
        editors:  ["Larry Klein", "Abe Taaheri"],
        date:     "2016-05",
    },
    "GeoTIFF": 
      {
        title:    "OGC GeoTIFF standard v1.1",
        href:     "http://docs.opengeospatial.org/is/19-008r4/19-008r4.html",
        status:   "Published",
        publisher:"Open Geospatial Consortium",
        editors:  ["Emmanuel Devys", "Ted Habermann", "Chuck Heazel", "Roger Lott", "Even Rouault"],
        date:     "2019-09-14",
    },
    "CIS10": 
      {
        title:    "ISO 19123-2:2018 Geographic information — Schema for coverage geometry and functions — Part 2: Coverage implementation schema",
        href:     "https://www.iso.org/standard/70948.html",
        status:   "Published",
        publisher:"ISD",
        //editors:  ["Emmanuel Devys", "Ted Habermann", "Chuck Heazel", "Roger Lott", "Even Rouault"],
        date:     "2018-10",
    },
      "iso-19123-2023": 
      {
        title:    "ISO 19123-1:2023 Geographic information — Schema for coverage geometry and functions — Part 1: Fundamentals",
        href:     "https://www.iso.org/standard/70743.html",
        status:   "Published",
        publisher:"ISD",
        //editors:  ["Emmanuel Devys", "Ted Habermann", "Chuck Heazel", "Roger Lott", "Even Rouault"],
        date:     "2023-06",
      },
    "isoJPEG2000": 
      {
        title:    "ISO/IEC 15444-1:2019 Information technology — JPEG 2000 image coding system — Part 1: Core coding system",
        href:     "https://www.iso.org/standard/78321.html",
        status:   "Published",
        publisher:"ISO",
        date:     "2019-10",
      },

    "GMLJPEG2000": 
      {
        title:    "OGC GML in JPEG 2000 (GMLJP2) Encoding Standard version 2.1",
        href:     "http://docs.opengeospatial.org/is/08-085r8/08-085r8.html",
        status:   "Published",
        publisher:"Open Geospatial Consortium",
        editors:  ["Lucio Colaiacomo", "Joan Masó", "Emmanuel Devys", "Eric Hirschorn"],
        date:     "2018-08-27",
      },
    "COVJSON": 
      {
        title:    "OGC CoverageJSON Community Standard version 1.0",
        href:     "https://docs.ogc.org/cs/21-069r2/21-069r2.html",
        status:   "Published",
        publisher:"Open Geospatial Consortium",
        editors:  ["Chris Little", "Jon Blower", "Maik Riechert"],
        date:     "2023-08-22",
    },
	  "OaMx2": 
      {
        title:    "Observations and Measurements - XML Implementation v2.0",
        href:     "https://portal.ogc.org/files/?artifact_id=41510",
        status:   "Published",
        publisher:"Open Geospatial Consortium",
        editors:  ["Simon Cox"],
        //date:     "2011-03-22",
    },
	  "OaMt1": 
      {
        title:    "OGC Timeseries Profile of Observations and Measurements version 1.0",
        href:     "http://docs.opengeospatial.org/is/15-043r3/15-043r3.html",
        status:   "Published",
        publisher:"Open Geospatial Consortium",
        editors:  ["James Tomkins", "Dominic Lowe"],
        //date:     "2016-09-09",
    },
	  "OMS3": 
      {
        title:    "OGC Abstract Specification Topic 20: Observations, measurements and samples version 3.0.0",
        href:     "https://docs.ogc.org/as/20-082r4/20-082r4.html",
        status:   "Published",
        publisher:"Open Geospatial Consortium",
        editors:  ["Katharina Schleidt", "Ilkka Rinne"],
        date:     "2023-05-26",
    },
    "IMMetingen": 
      {
        title:    "Informatiemodel Metingen",
        href:     "https://www.sikb.nl/datastandaarden/richtlijnen/sikb0101",
        status:   "Vastgesteld",
        publisher:"SIKB en IHW",
        //editors:  [],
        //date:     "2022-06-24",
    },
    "SensorML": 
      {
        title:    "OGC SensorML: Model and XML Encoding Standard v2.1",
        href:     "http://docs.ogc.org/is/12-000r2/12-000r2.html",
        status:   "Published",
        publisher:"Open Geospatial Consortium",
        editors:  ["Mike Botts", "Alexandre Robin", "Eric Hirschorn"],
        date:     "2020-08-10",
    },
    "CityGML3": 
      {
        title:    "OGC City Geography Markup Language (CityGML) Part 1: Conceptual Model Standard version 3.0",
        href:     "https://docs.ogc.org/is/20-010/20-010.html",
        status:   "Approved",
        publisher:"Open Geospatial Consortium",
        editors:  ["Thomas H. Kolbe", "Tatjana Kutzner", "Carl Stephen Smyth", "Claus Nagel", "Carsten Roensdorf", "Charles Heazel"],
        date:     "2021-09-13",
    },
    "CityJSON": 
      {
        title:    "CityJSON Community Standard version 2.0",
        href:     "https://docs.ogc.org/cs/20-072r5/20-072r5.html",
        status:   "Approved",
        publisher:"Open Geospatial Consortium",
        editors:  ["Hugo Ledoux, Balázs Dukai"],
        date:     "2023-10-20",
    }, 
    "SBB": 
      {
        title:    "Standaard voor het Beschrijven van Begrippen",
        href:     "https://www.geonovum.nl/geo-standaarden/standaard-voor-beschrijven-van-begrippen-sbb#:~:text=De%20Standaard%20voor%20het%20beschrijven,kader%20voor%20het%20vastleggen%20begrippen.",
        status:   "Versie ter vaststelling",
        publisher:"Geonovum",
        editors:  ["Jesse Bakker, Arjen Santema, Kees TRautwein"],
        date:     "2024-03-01",
    },
  },
  postProcess:[custGHPG],   //-- Optioneel voor een multi document repository

  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  previousPublishDate: "2023-06-22",  	    // Format is "YYY-MM-DD"
  //previousMaturity: "GN-CV",                   // kies 1 van deze 2 regels  	  
  //previousMaturity: "GN-VV",  	                // kies 1 van deze 2 regels
  previousMaturity: "GN-DEF",  	                // kies 1 van deze 2 regels wilko heeft deze derde regel toegevoegd.

  //-- Optionele parameters:
  //emailComments: "mim@geonovum.nl",         // reactie mailadres, alleen bij CV!
  //subtitle: "iets",                         // Subtitel van het document
  //maxTocLevel: 3,                           // Aantal niveau's ToC, default is 0
  //-- LOGO: Hier kan je een ander logo opgeven indien nodig
  //logos: [{
  //  src: "https://tools.geostandaarden.nl/respec/style/logos/OmgevingswetLogo.svg",
  //  alt: "Standaarden Omgevingswet",
  //  id: "TopLogo",
  //  height: 67,
  //  width: 300,
  //  url: "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD"
  // }],
};
