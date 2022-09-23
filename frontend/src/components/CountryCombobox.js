import { Fragment, useEffect, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import {FiChevronDown, FiCheck} from "react-icons/fi";

const countries = [
    {
      "name": "Ascension Island",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AC.svg",
      "id": "AC"
    },
    {
      "name": "Andorra",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg",
      "id": "AD"
    },
    {
      "name": "United Arab Emirates",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg",
      "id": "AE"
    },
    {
      "name": "Afghanistan",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg",
      "id": "AF"
    },
    {
      "name": "Antigua & Barbuda",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg",
      "id": "AG"
    },
    {
      "name": "Anguilla",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AI.svg",
      "id": "AI"
    },
    {
      "name": "Albania",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg",
      "id": "AL"
    },
    {
      "name": "Armenia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg",
      "id": "AM"
    },
    {
      "name": "Angola",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AO.svg",
      "id": "AO"
    },
    {
      "name": "Antarctica",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AQ.svg",
      "id": "AQ"
    },
    {
      "name": "Argentina",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AR.svg",
      "id": "AR"
    },
    {
      "name": "American Samoa",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AS.svg",
      "id": "AS"
    },
    {
      "name": "Austria",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg",
      "id": "AT"
    },
    {
      "name": "Australia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg",
      "id": "AU"
    },
    {
      "name": "Aruba",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AW.svg",
      "id": "AW"
    },
    {
      "name": "Åland Islands",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AX.svg",
      "id": "AX"
    },
    {
      "name": "Azerbaijan",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AZ.svg",
      "id": "AZ"
    },
    {
      "name": "Bosnia & Herzegovina",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BA.svg",
      "id": "BA"
    },
    {
      "name": "Barbados",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BB.svg",
      "id": "BB"
    },
    {
      "name": "Bangladesh",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg",
      "id": "BD"
    },
    {
      "name": "Belgium",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg",
      "id": "BE"
    },
    {
      "name": "Burkina Faso",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BF.svg",
      "id": "BF"
    },
    {
      "name": "Bulgaria",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg",
      "id": "BG"
    },
    {
      "name": "Bahrain",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BH.svg",
      "id": "BH"
    },
    {
      "name": "Burundi",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BI.svg",
      "id": "BI"
    },
    {
      "name": "Benin",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BJ.svg",
      "id": "BJ"
    },
    {
      "name": "St. Barthélemy",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BL.svg",
      "id": "BL"
    },
    {
      "name": "Bermuda",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BM.svg",
      "id": "BM"
    },
    {
      "name": "Brunei",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BN.svg",
      "id": "BN"
    },
    {
      "name": "Bolivia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BO.svg",
      "id": "BO"
    },
    {
      "name": "Caribbean Netherlands",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BQ.svg",
      "id": "BQ"
    },
    {
      "name": "Brazil",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg",
      "id": "BR"
    },
    {
      "name": "Bahamas",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BS.svg",
      "id": "BS"
    },
    {
      "name": "Bhutan",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BT.svg",
      "id": "BT"
    },
    {
      "name": "Bouvet Island",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BV.svg",
      "id": "BV"
    },
    {
      "name": "Botswana",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BW.svg",
      "id": "BW"
    },
    {
      "name": "Belarus",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BY.svg",
      "id": "BY"
    },
    {
      "name": "Belize",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BZ.svg",
      "id": "BZ"
    },
    {
      "name": "Canada",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg",
      "id": "CA"
    },
    {
      "name": "Cocos (Keeling) Islands",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CC.svg",
      "id": "CC"
    },
    {
      "name": "Congo - Kinshasa",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CD.svg",
      "id": "CD"
    },
    {
      "name": "Central African Republic",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CF.svg",
      "id": "CF"
    },
    {
      "name": "Congo - Brazzaville",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CG.svg",
      "id": "CG"
    },
    {
      "name": "Switzerland",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg",
      "id": "CH"
    },
    {
      "name": "Côte d’Ivoire",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CI.svg",
      "id": "CI"
    },
    {
      "name": "Cook Islands",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CK.svg",
      "id": "CK"
    },
    {
      "name": "Chile",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CL.svg",
      "id": "CL"
    },
    {
      "name": "Cameroon",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CM.svg",
      "id": "CM"
    },
    {
      "name": "China",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg",
      "id": "CN"
    },
    {
      "name": "Colombia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CO.svg",
      "id": "CO"
    },
    {
      "name": "Clipperton Island",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CP.svg",
      "id": "CP"
    },
    {
      "name": "Costa Rica",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CR.svg",
      "id": "CR"
    },
    {
      "name": "Cuba",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CU.svg",
      "id": "CU"
    },
    {
      "name": "Cape Verde",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CV.svg",
      "id": "CV"
    },
    {
      "name": "Curaçao",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CW.svg",
      "id": "CW"
    },
    {
      "name": "Christmas Island",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CX.svg",
      "id": "CX"
    },
    {
      "name": "Cyprus",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CY.svg",
      "id": "CY"
    },
    {
      "name": "Czechia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CZ.svg",
      "id": "CZ"
    },
    {
      "name": "Germany",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg",
      "id": "DE"
    },
    {
      "name": "Diego Garcia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DG.svg",
      "id": "DG"
    },
    {
      "name": "Djibouti",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DJ.svg",
      "id": "DJ"
    },
    {
      "name": "Denmark",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg",
      "id": "DK"
    },
    {
      "name": "Dominica",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DM.svg",
      "id": "DM"
    },
    {
      "name": "Dominican Republic",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DO.svg",
      "id": "DO"
    },
    {
      "name": "Algeria",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DZ.svg",
      "id": "DZ"
    },
    {
      "name": "Ceuta & Melilla",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EA.svg",
      "id": "EA"
    },
    {
      "name": "Ecuador",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EC.svg",
      "id": "EC"
    },
    {
      "name": "Estonia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg",
      "id": "EE"
    },
    {
      "name": "Egypt",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg",
      "id": "EG"
    },
    {
      "name": "Western Sahara",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EH.svg",
      "id": "EH"
    },
    {
      "name": "Eritrea",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ER.svg",
      "id": "ER"
    },
    {
      "name": "Spain",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg",
      "id": "ES"
    },
    {
      "name": "Ethiopia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg",
      "id": "ET"
    },
    {
      "name": "European Union",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EU.svg",
      "id": "EU"
    },
    {
      "name": "Finland",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg",
      "id": "FI"
    },
    {
      "name": "Fiji",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FJ.svg",
      "id": "FJ"
    },
    {
      "name": "Falkland Islands",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FK.svg",
      "id": "FK"
    },
    {
      "name": "Micronesia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FM.svg",
      "id": "FM"
    },
    {
      "name": "Faroe Islands",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FO.svg",
      "id": "FO"
    },
    {
      "name": "France",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg",
      "id": "FR"
    },
    {
      "name": "Gabon",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GA.svg",
      "id": "GA"
    },
    {
      "name": "United Kingdom",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg",
      "id": "GB"
    },
    {
      "name": "Grenada",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GD.svg",
      "id": "GD"
    },
    {
      "name": "Georgia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GE.svg",
      "id": "GE"
    },
    {
      "name": "French Guiana",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GF.svg",
      "id": "GF"
    },
    {
      "name": "Guernsey",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GG.svg",
      "id": "GG"
    },
    {
      "name": "Ghana",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GH.svg",
      "id": "GH"
    },
    {
      "name": "Gibraltar",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GI.svg",
      "id": "GI"
    },
    {
      "name": "Greenland",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GL.svg",
      "id": "GL"
    },
    {
      "name": "Gambia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GM.svg",
      "id": "GM"
    },
    {
      "name": "Guinea",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GN.svg",
      "id": "GN"
    },
    {
      "name": "Guadeloupe",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GP.svg",
      "id": "GP"
    },
    {
      "name": "Equatorial Guinea",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GQ.svg",
      "id": "GQ"
    },
    {
      "name": "Greece",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg",
      "id": "GR"
    },
    {
      "name": "South Georgia & South Sandwich Islands",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GS.svg",
      "id": "GS"
    },
    {
      "name": "Guatemala",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GT.svg",
      "id": "GT"
    },
    {
      "name": "Guam",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GU.svg",
      "id": "GU"
    },
    {
      "name": "Guinea-Bissau",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GW.svg",
      "id": "GW"
    },
    {
      "name": "Guyana",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GY.svg",
      "id": "GY"
    },
    {
      "name": "Hong Kong SAR China",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HK.svg",
      "id": "HK"
    },
    {
      "name": "Heard & McDonald Islands",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HM.svg",
      "id": "HM"
    },
    {
      "name": "Honduras",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HN.svg",
      "id": "HN"
    },
    {
      "name": "Croatia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg",
      "id": "HR"
    },
    {
      "name": "Haiti",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HT.svg",
      "id": "HT"
    },
    {
      "name": "Hungary",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg",
      "id": "HU"
    },
    {
      "name": "Canary Islands",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IC.svg",
      "id": "IC"
    },
    {
      "name": "Indonesia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg",
      "id": "ID"
    },
    {
      "name": "Ireland",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg",
      "id": "IE"
    },
    {
      "name": "Israel",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg",
      "id": "IL"
    },
    {
      "name": "Isle of Man",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IM.svg",
      "id": "IM"
    },
    {
      "name": "India",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg",
      "id": "IN"
    },
    {
      "name": "British Indian Ocean Territory",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IO.svg",
      "id": "IO"
    },
    {
      "name": "Iraq",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg",
      "id": "IQ"
    },
    {
      "name": "Iran",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IR.svg",
      "id": "IR"
    },
    {
      "name": "Iceland",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg",
      "id": "IS"
    },
    {
      "name": "Italy",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg",
      "id": "IT"
    },
    {
      "name": "Jersey",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JE.svg",
      "id": "JE"
    },
    {
      "name": "Jamaica",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JM.svg",
      "id": "JM"
    },
    {
      "name": "Jordan",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JO.svg",
      "id": "JO"
    },
    {
      "name": "Japan",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg",
      "id": "JP"
    },
    {
      "name": "Kenya",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg",
      "id": "KE"
    },
    {
      "name": "Kyrgyzstan",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KG.svg",
      "id": "KG"
    },
    {
      "name": "Cambodia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KH.svg",
      "id": "KH"
    },
    {
      "name": "Kiribati",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KI.svg",
      "id": "KI"
    },
    {
      "name": "Comoros",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KM.svg",
      "id": "KM"
    },
    {
      "name": "St. Kitts & Nevis",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KN.svg",
      "id": "KN"
    },
    {
      "name": "North Korea",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KP.svg",
      "id": "KP"
    },
    {
      "name": "South Korea",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg",
      "id": "KR"
    },
    {
      "name": "Kuwait",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KW.svg",
      "id": "KW"
    },
    {
      "name": "Cayman Islands",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KY.svg",
      "id": "KY"
    },
    {
      "name": "Kazakhstan",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KZ.svg",
      "id": "KZ"
    },
    {
      "name": "Laos",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LA.svg",
      "id": "LA"
    },
    {
      "name": "Lebanon",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LB.svg",
      "id": "LB"
    },
    {
      "name": "St. Lucia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LC.svg",
      "id": "LC"
    },
    {
      "name": "Liechtenstein",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LI.svg",
      "id": "LI"
    },
    {
      "name": "Sri Lanka",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg",
      "id": "LK"
    },
    {
      "name": "Liberia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LR.svg",
      "id": "LR"
    },
    {
      "name": "Lesotho",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LS.svg",
      "id": "LS"
    },
    {
      "name": "Lithuania",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg",
      "id": "LT"
    },
    {
      "name": "Luxembourg",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LU.svg",
      "id": "LU"
    },
    {
      "name": "Latvia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg",
      "id": "LV"
    },
    {
      "name": "Libya",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LY.svg",
      "id": "LY"
    },
    {
      "name": "Morocco",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MA.svg",
      "id": "MA"
    },
    {
      "name": "Monaco",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MC.svg",
      "id": "MC"
    },
    {
      "name": "Moldova",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MD.svg",
      "id": "MD"
    },
    {
      "name": "Montenegro",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ME.svg",
      "id": "ME"
    },
    {
      "name": "St. Martin",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MF.svg",
      "id": "MF"
    },
    {
      "name": "Madagascar",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MG.svg",
      "id": "MG"
    },
    {
      "name": "Marshall Islands",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MH.svg",
      "id": "MH"
    },
    {
      "name": "North Macedonia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MK.svg",
      "id": "MK"
    },
    {
      "name": "Mali",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ML.svg",
      "id": "ML"
    },
    {
      "name": "Myanmar (Burma)",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MM.svg",
      "id": "MM"
    },
    {
      "name": "Mongolia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MN.svg",
      "id": "MN"
    },
    {
      "name": "Macao SAR China",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MO.svg",
      "id": "MO"
    },
    {
      "name": "Northern Mariana Islands",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MP.svg",
      "id": "MP"
    },
    {
      "name": "Martinique",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MQ.svg",
      "id": "MQ"
    },
    {
      "name": "Mauritania",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MR.svg",
      "id": "MR"
    },
    {
      "name": "Montserrat",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MS.svg",
      "id": "MS"
    },
    {
      "name": "Malta",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg",
      "id": "MT"
    },
    {
      "name": "Mauritius",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MU.svg",
      "id": "MU"
    },
    {
      "name": "Maldives",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MV.svg",
      "id": "MV"
    },
    {
      "name": "Malawi",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MW.svg",
      "id": "MW"
    },
    {
      "name": "Mexico",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg",
      "id": "MX"
    },
    {
      "name": "Malaysia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MY.svg",
      "id": "MY"
    },
    {
      "name": "Mozambique",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MZ.svg",
      "id": "MZ"
    },
    {
      "name": "Namibia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NA.svg",
      "id": "NA"
    },
    {
      "name": "New Caledonia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NC.svg",
      "id": "NC"
    },
    {
      "name": "Niger",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NE.svg",
      "id": "NE"
    },
    {
      "name": "Norfolk Island",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NF.svg",
      "id": "NF"
    },
    {
      "name": "Nigeria",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg",
      "id": "NG"
    },
    {
      "name": "Nicaragua",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NI.svg",
      "id": "NI"
    },
    {
      "name": "Netherlands",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg",
      "id": "NL"
    },
    {
      "name": "Norway",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NO.svg",
      "id": "NO"
    },
    {
      "name": "Nepal",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg",
      "id": "NP"
    },
    {
      "name": "Nauru",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NR.svg",
      "id": "NR"
    },
    {
      "name": "Niue",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NU.svg",
      "id": "NU"
    },
    {
      "name": "New Zealand",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NZ.svg",
      "id": "NZ"
    },
    {
      "name": "Oman",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/OM.svg",
      "id": "OM"
    },
    {
      "name": "Panama",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PA.svg",
      "id": "PA"
    },
    {
      "name": "Peru",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PE.svg",
      "id": "PE"
    },
    {
      "name": "French Polynesia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PF.svg",
      "id": "PF"
    },
    {
      "name": "Papua New Guinea",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PG.svg",
      "id": "PG"
    },
    {
      "name": "Philippines",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PH.svg",
      "id": "PH"
    },
    {
      "name": "Pakistan",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg",
      "id": "PK"
    },
    {
      "name": "Poland",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg",
      "id": "PL"
    },
    {
      "name": "St. Pierre & Miquelon",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PM.svg",
      "id": "PM"
    },
    {
      "name": "Pitcairn Islands",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PN.svg",
      "id": "PN"
    },
    {
      "name": "Puerto Rico",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PR.svg",
      "id": "PR"
    },
    {
      "name": "Palestinian Territories",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PS.svg",
      "id": "PS"
    },
    {
      "name": "Portugal",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg",
      "id": "PT"
    },
    {
      "name": "Palau",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PW.svg",
      "id": "PW"
    },
    {
      "name": "Paraguay",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PY.svg",
      "id": "PY"
    },
    {
      "name": "Qatar",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/QA.svg",
      "id": "QA"
    },
    {
      "name": "Réunion",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RE.svg",
      "id": "RE"
    },
    {
      "name": "Romania",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg",
      "id": "RO"
    },
    {
      "name": "Serbia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg",
      "id": "RS"
    },
    {
      "name": "Russia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg",
      "id": "RU"
    },
    {
      "name": "Rwanda",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RW.svg",
      "id": "RW"
    },
    {
      "name": "Saudi Arabia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg",
      "id": "SA"
    },
    {
      "name": "Solomon Islands",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SB.svg",
      "id": "SB"
    },
    {
      "name": "Seychelles",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SC.svg",
      "id": "SC"
    },
    {
      "name": "Sudan",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SD.svg",
      "id": "SD"
    },
    {
      "name": "Sweden",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg",
      "id": "SE"
    },
    {
      "name": "Singapore",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SG.svg",
      "id": "SG"
    },
    {
      "name": "St. Helena",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SH.svg",
      "id": "SH"
    },
    {
      "name": "Slovenia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg",
      "id": "SI"
    },
    {
      "name": "Svalbard & Jan Mayen",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SJ.svg",
      "id": "SJ"
    },
    {
      "name": "Slovakia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg",
      "id": "SK"
    },
    {
      "name": "Sierra Leone",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SL.svg",
      "id": "SL"
    },
    {
      "name": "San Marino",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SM.svg",
      "id": "SM"
    },
    {
      "name": "Senegal",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SN.svg",
      "id": "SN"
    },
    {
      "name": "Somalia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SO.svg",
      "id": "SO"
    },
    {
      "name": "Suriname",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SR.svg",
      "id": "SR"
    },
    {
      "name": "South Sudan",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SS.svg",
      "id": "SS"
    },
    {
      "name": "São Tomé & Príncipe",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ST.svg",
      "id": "ST"
    },
    {
      "name": "El Salvador",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SV.svg",
      "id": "SV"
    },
    {
      "name": "Sint Maarten",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SX.svg",
      "id": "SX"
    },
    {
      "name": "Syria",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SY.svg",
      "id": "SY"
    },
    {
      "name": "Eswatini",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SZ.svg",
      "id": "SZ"
    },
    {
      "name": "Tristan da Cunha",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TA.svg",
      "id": "TA"
    },
    {
      "name": "Turks & Caicos Islands",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TC.svg",
      "id": "TC"
    },
    {
      "name": "Chad",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TD.svg",
      "id": "TD"
    },
    {
      "name": "French Southern Territories",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TF.svg",
      "id": "TF"
    },
    {
      "name": "Togo",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TG.svg",
      "id": "TG"
    },
    {
      "name": "Thailand",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg",
      "id": "TH"
    },
    {
      "name": "Tajikistan",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TJ.svg",
      "id": "TJ"
    },
    {
      "name": "Tokelau",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TK.svg",
      "id": "TK"
    },
    {
      "name": "Timor-Leste",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TL.svg",
      "id": "TL"
    },
    {
      "name": "Turkmenistan",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TM.svg",
      "id": "TM"
    },
    {
      "name": "Tunisia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TN.svg",
      "id": "TN"
    },
    {
      "name": "Tonga",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TO.svg",
      "id": "TO"
    },
    {
      "name": "Turkey",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg",
      "id": "TR"
    },
    {
      "name": "Trinidad & Tobago",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TT.svg",
      "id": "TT"
    },
    {
      "name": "Tuvalu",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TV.svg",
      "id": "TV"
    },
    {
      "name": "Taiwan",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TW.svg",
      "id": "TW"
    },
    {
      "name": "Tanzania",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TZ.svg",
      "id": "TZ"
    },
    {
      "name": "Ukraine",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UA.svg",
      "id": "UA"
    },
    {
      "name": "Uganda",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UG.svg",
      "id": "UG"
    },
    {
      "name": "U.S. Outlying Islands",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UM.svg",
      "id": "UM"
    },
    {
      "name": "United Nations",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UN.svg",
      "id": "UN"
    },
    {
      "name": "United States",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg",
      "id": "US"
    },
    {
      "name": "Uruguay",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UY.svg",
      "id": "UY"
    },
    {
      "name": "Uzbekistan",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg",
      "id": "UZ"
    },
    {
      "name": "Vatican City",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VA.svg",
      "id": "VA"
    },
    {
      "name": "St. Vincent & Grenadines",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VC.svg",
      "id": "VC"
    },
    {
      "name": "Venezuela",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VE.svg",
      "id": "VE"
    },
    {
      "name": "British Virgin Islands",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VG.svg",
      "id": "VG"
    },
    {
      "name": "U.S. Virgin Islands",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VI.svg",
      "id": "VI"
    },
    {
      "name": "Vietnam",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg",
      "id": "VN"
    },
    {
      "name": "Vanuatu",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VU.svg",
      "id": "VU"
    },
    {
      "name": "Wallis & Futuna",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WF.svg",
      "id": "WF"
    },
    {
      "name": "Samoa",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WS.svg",
      "id": "WS"
    },
    {
      "name": "Kosovo",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/XK.svg",
      "id": "XK"
    },
    {
      "name": "Yemen",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YE.svg",
      "id": "YE"
    },
    {
      "name": "Mayotte",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YT.svg",
      "id": "YT"
    },
    {
      "name": "South Africa",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg",
      "id": "ZA"
    },
    {
      "name": "Zambia",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZM.svg",
      "id": "ZM"
    },
    {
      "name": "Zimbabwe",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZW.svg",
      "id": "ZW"
    },
    {
      "name": "England",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ENGLAND.svg",
      "id": "ENGLAND"
    },
    {
      "name": "Scotland",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SCOTLAND.svg",
      "id": "SCOTLAND"
    },
    {
      "name": "Wales",
      "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WALES.svg",
      "id": "WALES"
    }
  ]

export default function CountryCombobox({onSelect}) {
    const [selected, setSelected] = useState('')
    const [query, setQuery] = useState('')

    const filteredCountry =
        query === ''
            ? countries
            : countries.filter((country) =>
                country.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )
    useEffect(()=>{
        if(selected){
            onSelect(selected)
        };
    }, [selected])
    return (
        <Combobox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-visible rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        displayValue={(country) => country.name}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <FiChevronDown/>
                    </Combobox.Button>
                </div>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredCountry.length === 0 && query !== '' ? (
                            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                Nothing found.
                            </div>
                        ) : (
                            filteredCountry.map((country) => (
                                <Combobox.Option
                                    key={country.id}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                                        }`
                                    }
                                    value={country}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`flex items-center truncate ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                               <img src={country.image} alt={country.name} className="w-6 h-6 mr-2 rounded-full" />
                                                {country.name}
                                            </span>
                                            {selected ? (
                                                <span
                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-blue-500'
                                                        }`}
                                                >
                                                    <FiCheck/>
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))
                        )}
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    )
}