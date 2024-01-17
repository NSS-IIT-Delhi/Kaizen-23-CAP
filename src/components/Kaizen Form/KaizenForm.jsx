import React from "react";
import "./Form.css";
import Header from "./navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./kaizen logo.png";

var s_a = new Array();
s_a[0] = "";
s_a[1] =
  " Alipur | Andaman Island | Anderson Island | Arainj-Laka-Punga | Austinabad | Bamboo Flat | Barren Island | Beadonabad | Betapur | Bindraban | Bonington | Brookesabad | Cadell Point | Calicut | Chetamale | Cinque Islands | Defence Island | Digilpur | Dolyganj | Flat Island | Geinyale | Great Coco Island | Haddo | Havelock Island | Henry Lawrence Island | Herbertabad | Hobdaypur | Ilichar | Ingoie | Inteview Island | Jangli Ghat | Jhon Lawrence Island | Karen | Kartara | KYD Islannd | Landfall Island | Little Andmand | Little Coco Island | Long Island | Maimyo | Malappuram | Manglutan | Manpur | Mitha Khari | Neill Island | Nicobar Island | North Brother Island | North Passage Island | North Sentinel Island | Nothen Reef Island | Outram Island | Pahlagaon | Palalankwe | Passage Island | Phaiapong | Phoenix Island | Port Blair | Preparis Island | Protheroepur | Rangachang | Rongat | Rutland Island | Sabari | Saddle Peak | Shadipur | Smith Island | Sound Island | South Sentinel Island | Spike Island | Tarmugli Island | Taylerabad | Titaije | Toibalawe | Tusonabad | West Island | Wimberleyganj | Yadita";
s_a[2] =
  " Achampet | Adilabad | Adoni | Alampur | Allagadda | Alur | Amalapuram | Amangallu | Anakapalle | Anantapur | Andole | Araku | Armoor | Asifabad | Aswaraopet | Atmakur | B. Kothakota | Badvel | Banaganapalle | Bandar | Bangarupalem | Banswada | Bapatla | Bellampalli | Bhadrachalam | Bhainsa | Bheemunipatnam | Bhimadole | Bhimavaram | Bhongir | Bhooragamphad | Boath | Bobbili | Bodhan | Chandoor | Chavitidibbalu | Chejerla | Chepurupalli | Cherial | Chevella | Chinnor | Chintalapudi | Chintapalle | Chirala | Chittoor | Chodavaram | Cuddapah | Cumbum | Darsi | Devarakonda | Dharmavaram | Dichpalli | Divi | Donakonda | Dronachalam | East Godavari | Eluru | Eturnagaram | Gadwal | Gajapathinagaram | Gajwel | Garladinne | Giddalur | Godavari | Gooty | Gudivada | Gudur | Guntur | Hindupur | Hunsabad | Huzurabad | Huzurnagar | Hyderabad | Ibrahimpatnam | Jaggayyapet | Jagtial | Jammalamadugu | Jangaon | Jangareddygudem | Jannaram | Kadiri | Kaikaluru | Kakinada | Kalwakurthy | Kalyandurg | Kamalapuram | Kamareddy | Kambadur | Kanaganapalle | Kandukuru | Kanigiri | Karimnagar | Kavali | Khammam | Khanapur (AP) | Kodangal | Koduru | Koilkuntla | Kollapur | Kothagudem | Kovvur | Krishna | Krosuru | Kuppam | Kurnool | Lakkireddipalli | Madakasira | Madanapalli | Madhira | Madnur | Mahabubabad | Mahabubnagar | Mahadevapur | Makthal | Mancherial | Mandapeta | Mangalagiri | Manthani | Markapur | Marturu | Medachal | Medak | Medarmetla | Metpalli | Mriyalguda | Mulug | Mylavaram | Nagarkurnool | Nalgonda | Nallacheruvu | Nampalle | Nandigama | Nandikotkur | Nandyal | Narasampet | Narasaraopet | Narayanakhed | Narayanpet | Narsapur | Narsipatnam | Nazvidu | Nelloe | Nellore | Nidamanur | Nirmal | Nizamabad | Nuguru | Ongole | Outsarangapalle | Paderu | Pakala | Palakonda | Paland | Palmaneru | Pamuru | Pargi | Parkal | Parvathipuram | Pathapatnam | Pattikonda | Peapalle | Peddapalli | Peddapuram | Penukonda | Piduguralla | Piler | Pithapuram | Podili | Polavaram | Prakasam | Proddatur | Pulivendla | Punganur | Putturu | Rajahmundri | Rajampeta | Ramachandrapuram | Ramannapet | Rampachodavaram | Rangareddy | Rapur | Rayachoti | Rayadurg | Razole | Repalle | Saluru | Sangareddy | Sathupalli | Sattenapalle | Satyavedu | Shadnagar | Siddavattam | Siddipet | Sileru | Sircilla | Sirpur Kagaznagar | Sodam | Sompeta | Srikakulam | Srikalahasthi | Srisailam | Srungavarapukota | Sudhimalla | Sullarpet | Tadepalligudem | Tadipatri | Tanduru | Tanuku | Tekkali | Tenali | Thungaturthy | Tirivuru | Tirupathi | Tuni | Udaygiri | Ulvapadu | Uravakonda | Utnor | V.R. Puram | Vaimpalli | Vayalpad | Venkatgiri | Venkatgirikota | Vijayawada | Vikrabad | Vinjamuru | Vinukonda | Visakhapatnam | Vizayanagaram | Vizianagaram | Vuyyuru | Wanaparthy | Warangal | Wardhannapet | Yelamanchili | Yelavaram | Yeleswaram | Yellandu | Yellanuru | Yellareddy | Yerragondapalem | Zahirabad ";
s_a[3] =
  " Along | Anini | Anjaw | Bameng | Basar | Changlang | Chowkhem | Daporizo | Dibang Valley | Dirang | Hayuliang | Huri | Itanagar | Jairampur | Kalaktung | Kameng | Khonsa | Kolaring | Kurung Kumey | Lohit | Lower Dibang Valley | Lower Subansiri | Mariyang | Mechuka | Miao | Nefra | Pakkekesang | Pangin | Papum Pare | Passighat | Roing | Sagalee | Seppa | Siang | Tali | Taliha | Tawang | Tezu | Tirap | Tuting | Upper Siang | Upper Subansiri | Yiang Kiag ";
s_a[4] =
  " Abhayapuri | Baithalangshu | Barama | Barpeta Road | Bihupuria | Bijni | Bilasipara | Bokajan | Bokakhat | Boko | Bongaigaon | Cachar | Cachar Hills | Darrang | Dhakuakhana | Dhemaji | Dhubri | Dibrugarh | Digboi | Diphu | Goalpara | Gohpur | Golaghat | Guwahati | Hailakandi | Hajo | Halflong | Hojai | Howraghat | Jorhat | Kamrup | Karbi Anglong | Karimganj | Kokarajhar | Kokrajhar | Lakhimpur | Maibong | Majuli | Mangaldoi | Mariani | Marigaon | Moranhat | Morigaon | Nagaon | Nalbari | Rangapara | Sadiya | Sibsagar | Silchar | Sivasagar | Sonitpur | Tarabarihat | Tezpur | Tinsukia | Udalgiri | Udalguri | UdarbondhBarpeta";
s_a[5] =
  " Adhaura | Amarpur | Araria | Areraj | Arrah | Arwal | Aurangabad | Bagaha | Banka | Banmankhi | Barachakia | Barauni | Barh | Barosi | Begusarai | Benipatti | Benipur | Bettiah | Bhabhua | Bhagalpur | Bhojpur | Bidupur | Biharsharif | Bikram | Bikramganj | Birpur | Buxar | Chakai | Champaran | Chapara | Dalsinghsarai | Danapur | Darbhanga | Daudnagar | Dhaka | Dhamdaha | Dumraon | Ekma | Forbesganj | Gaya | Gogri | Gopalganj | H.Kharagpur | Hajipur | Hathua | Hilsa | Imamganj | Jahanabad | Jainagar | Jamshedpur | Jamui | Jehanabad | Jhajha | Jhanjharpur | Kahalgaon | Kaimur (Bhabua) | Katihar | Katoria | Khagaria | Kishanganj | Korha | Lakhisarai | Madhepura | Madhubani | Maharajganj | Mahua | Mairwa | Mallehpur | Masrakh | Mohania | Monghyr | Motihari | Motipur | Munger | Muzaffarpur | Nabinagar | Nalanda | Narkatiaganj | Naugachia | Nawada | Pakribarwan | Pakridayal | Patna | Phulparas | Piro | Pupri | Purena | Purnia | Rafiganj | Rajauli | Ramnagar | Raniganj | Raxaul | Rohtas | Rosera | S.Bakhtiarpur | Saharsa | Samastipur | Saran | Sasaram | Seikhpura | Sheikhpura | Sheohar | Sherghati | Sidhawalia | Singhwara | Sitamarhi | Siwan | Sonepur | Supaul | Thakurganj | Triveniganj | Udakishanganj | Vaishali | Wazirganj";
s_a[6] = " Chandigarh | Mani Marja";
s_a[7] =
  " Ambikapur | Antagarh | Arang | Bacheli | Bagbahera | Bagicha | Baikunthpur | Balod | Balodabazar | Balrampur | Barpalli | Basana | Bastanar | Bastar | Bderajpur | Bemetara | Berla | Bhairongarh | Bhanupratappur | Bharathpur | Bhatapara | Bhilai | Bhilaigarh | Bhopalpatnam | Bijapur | Bilaspur | Bodla | Bokaband | Chandipara | Chhinagarh | Chhuriakala | Chingmut | Chuikhadan | Dabhara | Dallirajhara | Dantewada | Deobhog | Dhamda | Dhamtari | Dharamjaigarh | Dongargarh | Durg | Durgakondal | Fingeshwar | Gariaband | Garpa | Gharghoda | Gogunda | Ilamidi | Jagdalpur | Janjgir | Janjgir-Champa | Jarwa | Jashpur | Jashpurnagar | Kabirdham-Kawardha | Kanker | Kasdol | Kathdol | Kathghora | Kawardha | Keskal | Khairgarh | Kondagaon | Konta | Korba | Korea | Kota | Koyelibeda | Kuakunda | Kunkuri | Kurud | Lohadigundah | Lormi | Luckwada | Mahasamund | Makodi | Manendragarh | Manpur | Marwahi | Mohla | Mungeli | Nagri | Narainpur | Narayanpur | Neora | Netanar | Odgi | Padamkot | Pakhanjur | Pali | Pandaria | Pandishankar | Parasgaon | Pasan | Patan | Pathalgaon | Pendra | Pratappur | Premnagar | Raigarh | Raipur | Rajnandgaon | Rajpur | Ramchandrapur | Saraipali | Saranggarh | Sarona | Semaria | Shakti | Sitapur | Sukma | Surajpur | Surguja | Tapkara | Toynar | Udaipur | Uproda | Wadrainagar";
s_a[8] =
  " Amal | Amli | Bedpa | Chikhli | Dadra & Nagar Haveli | Dahikhed | Dolara | Galonda | Kanadi | Karchond | Khadoli | Kharadpada | Kherabari | Kherdi | Kothar | Luari | Mashat | Rakholi | Rudana | Saili | Sili | Silvassa | Sindavni | Udva | Umbarkoi | Vansda | Vasona | Velugam ";
s_a[9] =
  " Brancavare | Dagasi | Daman | Diu | Magarvara | Nagwa | Pariali | Passo Covo ";
s_a[10] =
  " Central Delhi | East Delhi | New Delhi | North Delhi | North East Delhi | North West Delhi | South Delhi | South West Delhi | West Delhi ";
s_a[11] =
  " Canacona | Candolim | Chinchinim | Cortalim | Goa | Jua | Madgaon | Mahem | Mapuca | Marmagao | Panji | Ponda | Sanvordem | Terekhol ";
s_a[12] =
  " Ahmedabad | Ahwa | Amod | Amreli | Anand | Anjar | Ankaleshwar | Babra | Balasinor | Banaskantha | Bansada | Bardoli | Bareja | Baroda | Barwala | Bayad | Bhachav | Bhanvad | Bharuch | Bhavnagar | Bhiloda | Bhuj | Billimora | Borsad | Botad | Chanasma | Chhota Udaipur | Chotila | Dabhoi | Dahod | Damnagar | Dang | Danta | Dasada | Dediapada | Deesa | Dehgam | Deodar | Devgadhbaria | Dhandhuka | Dhanera | Dharampur | Dhari | Dholka | Dhoraji | Dhrangadhra | Dhrol | Dwarka | Fortsongadh | Gadhada | Gandhi Nagar | Gariadhar | Godhra | Gogodar | Gondal | Halol | Halvad | Harij | Himatnagar | Idar | Jambusar | Jamjodhpur | Jamkalyanpur | Jamnagar | Jasdan | Jetpur | Jhagadia | Jhalod | Jodia | Junagadh | Junagarh | Kalawad | Kalol | Kapad Wanj | Keshod | Khambat | Khambhalia | Khavda | Kheda | Khedbrahma | Kheralu | Kodinar | Kotdasanghani | Kunkawav | Kutch | Kutchmandvi | Kutiyana | Lakhpat | Lakhtar | Lalpur | Limbdi | Limkheda | Lunavada | M.M.Mangrol | Mahuva | Malia-Hatina | Maliya | Malpur | Manavadar | Mandvi | Mangrol | Mehmedabad | Mehsana | Miyagam | Modasa | Morvi | Muli | Mundra | Nadiad | Nakhatrana | Nalia | Narmada | Naswadi | Navasari | Nizar | Okha | Paddhari | Padra | Palanpur | Palitana | Panchmahals | Patan | Pavijetpur | Porbandar | Prantij | Radhanpur | Rahpar | Rajaula | Rajkot | Rajpipla | Ranavav | Sabarkantha | Sanand | Sankheda | Santalpur | Santrampur | Savarkundla | Savli | Sayan | Sayla | Shehra | Sidhpur | Sihor | Sojitra | Sumrasar | Surat | Surendranagar | Talaja | Thara | Tharad | Thasra | Una-Diu | Upleta | Vadgam | Vadodara | Valia | Vallabhipur | Valod | Valsad | Vanthali | Vapi | Vav | Veraval | Vijapur | Viramgam | Visavadar | Visnagar | Vyara | Waghodia | Wankaner ";
s_a[13] =
  " Adampur Mandi | Ambala | Assandh | Bahadurgarh | Barara | Barwala | Bawal | Bawanikhera | Bhiwani | Charkhidadri | Cheeka | Chhachrauli | Dabwali | Ellenabad | Faridabad | Fatehabad | Ferojpur Jhirka | Gharaunda | Gohana | Gurgaon | Hansi | Hisar | Jagadhari | Jatusana | Jhajjar | Jind | Julana | Kaithal | Kalanaur | Kalanwali | Kalka | Karnal | Kosli | Kurukshetra | Loharu | Mahendragarh | Meham | Mewat | Mohindergarh | Naraingarh | Narnaul | Narwana | Nilokheri | Nuh | Palwal | Panchkula | Panipat | Pehowa | Ratia | Rewari | Rohtak | Safidon | Sirsa | Siwani | Sonipat | Tohana | Tohsam | Yamunanagar ";
s_a[14] =
  " Amb | Arki | Banjar | Bharmour | Bilaspur | Chamba | Churah | Dalhousie | Dehra Gopipur | Hamirpur | Jogindernagar | Kalpa | Kangra | Kinnaur | Kullu | Lahaul | Mandi | Nahan | Nalagarh | Nirmand | Nurpur | Palampur | Pangi | Paonta | Pooh | Rajgarh | Rampur Bushahar | Rohru | Shimla | Sirmaur | Solan | Spiti | Sundernagar | Theog | Udaipur | Una";
s_a[15] =
  " Akhnoor | Anantnag | Badgam | Bandipur | Baramulla | Basholi | Bedarwah | Budgam | Doda | Gulmarg | Jammu | Kalakot | Kargil | Karnah | Kathua | Kishtwar | Kulgam | Kupwara | Leh | Mahore | Nagrota | Nobra | Nowshera | Nyoma | Padam | Pahalgam | Patnitop | Poonch | Pulwama | Rajouri | Ramban | Ramnagar | Reasi | Samba | Srinagar | Udhampur | Vaishno Devi ";
s_a[16] =
  " Bagodar | Baharagora | Balumath | Barhi | Barkagaon | Barwadih | Basia | Bermo | Bhandaria | Bhawanathpur | Bishrampur | Bokaro | Bolwa | Bundu | Chaibasa | Chainpur | Chakardharpur | Chandil | Chatra | Chavparan | Daltonganj | Deoghar | Dhanbad | Dumka | Dumri | Garhwa | Garu | Ghaghra | Ghatsila | Giridih | Godda | Gomia | Govindpur | Gumla | Hazaribagh | Hunterganj | Ichak | Itki | Jagarnathpur | Jamshedpur | Jamtara | Japla | Jharmundi | Jhinkpani | Jhumaritalaiya | Kathikund | Kharsawa | Khunti | Koderma | Kolebira | Latehar | Lohardaga | Madhupur | Mahagama | Maheshpur Raj | Mandar | Mandu | Manoharpur | Muri | Nagarutatri | Nala | Noamundi | Pakur | Palamu | Palkot | Patan | Rajdhanwar | Rajmahal | Ramgarh | Ranchi | Sahibganj | Saraikela | Simaria | Simdega | Singhbhum | Tisri | Torpa ";
s_a[17] =
  " Afzalpur | Ainapur | Aland | Alur | Anekal | Ankola | Arsikere | Athani | Aurad | Bableshwar | Badami | Bagalkot | Bagepalli | Bailhongal | Bangalore | Bangalore Rural | Bangarpet | Bantwal | Basavakalyan | Basavanabagewadi | Basavapatna | Belgaum | Bellary | Belthangady | Belur | Bhadravati | Bhalki | Bhatkal | Bidar | Bijapur | Biligi | Chadchan | Challakere | Chamrajnagar | Channagiri | Channapatna | Channarayapatna | Chickmagalur | Chikballapur | Chikkaballapur | Chikkanayakanahalli | Chikkodi | Chikmagalur | Chincholi | Chintamani | Chitradurga | Chittapur | Cowdahalli | Davanagere | Deodurga | Devangere | Devarahippargi | Dharwad | Doddaballapur | Gadag | Gangavathi | Gokak | Gowribdanpur | Gubbi | Gulbarga | Gundlupet | H.B.Halli | H.D. Kote | Haliyal | Hampi | Hangal | Harapanahalli | Hassan | Haveri | Hebri | Hirekerur | Hiriyur | Holalkere | Holenarsipur | Honnali | Honnavar | Hosadurga | Hosakote | Hosanagara | Hospet | Hubli | Hukkeri | Humnabad | Hungund | Hunsagi | Hunsur | Huvinahadagali | Indi | Jagalur | Jamkhandi | Jewargi | Joida | K.R. Nagar | Kadur | Kalghatagi | Kamalapur | Kanakapura | Kannada | Kargal | Karkala | Karwar | Khanapur | Kodagu | Kolar | Kollegal | Koppa | Koppal | Koratageri | Krishnarajapet | Kudligi | Kumta | Kundapur | Kundgol | Kunigal | Kurugodu | Kustagi | Lingsugur | Madikeri | Madugiri | Malavalli | Malur | Mandya | Mangalore | Manipal | Manvi | Mashal | Molkalmuru | Mudalgi | Muddebihal | Mudhol | Mudigere | Mulbagal | Mundagod | Mundargi | Murugod | Mysore | Nagamangala | Nanjangud | Nargund | Narsimrajapur | Navalgund | Nelamangala | Nimburga | Pandavapura | Pavagada | Puttur | Raibag | Raichur | Ramdurg | Ranebennur | Ron | Sagar | Sakleshpur | Salkani | Sandur | Saundatti | Savanur | Sedam | Shahapur | Shankarnarayana | Shikaripura | Shimoga | Shirahatti | Shorapur | Siddapur | Sidlaghatta | Sindagi | Sindhanur | Sira | Sirsi | Siruguppa | Somwarpet | Sorab | Sringeri | Sriniwaspur | Srirangapatna | Sullia | T. Narsipur | Tallak | Tarikere | Telgi | Thirthahalli | Tiptur | Tumkur | Turuvekere | Udupi | Virajpet | Wadi | Yadgiri | Yelburga | Yellapur ";
s_a[18] =
  " Adimaly | Adoor | Agathy | Alappuzha | Alathur | Alleppey | Alwaye | Amini | Androth | Attingal | Badagara | Bitra | Calicut | Cannanore | Chetlet | Ernakulam | Idukki | Irinjalakuda | Kadamath | Kalpeni | Kalpetta | Kanhangad | Kanjirapally | Kannur | Karungapally | Kasargode | Kavarathy | Kiltan | Kochi | Koduvayur | Kollam | Kottayam | Kovalam | Kozhikode | Kunnamkulam | Malappuram | Mananthodi | Manjeri | Mannarghat | Mavelikkara | Minicoy | Munnar | Muvattupuzha | Nedumandad | Nedumgandam | Nilambur | Palai | Palakkad | Palghat | Pathaanamthitta | Pathanamthitta | Payyanur | Peermedu | Perinthalmanna | Perumbavoor | Punalur | Quilon | Ranni | Shertallai | Shoranur | Taliparamba | Tellicherry | Thiruvananthapuram | Thodupuzha | Thrissur | Tirur | Tiruvalla | Trichur | Trivandrum | Uppala | Vadakkanchery | Vikom | Wayanad ";
s_a[19] =
  " Agatti Island | Bingaram Island | Bitra Island | Chetlat Island | Kadmat Island | Kalpeni Island | Kavaratti Island | Kiltan Island | Lakshadweep Sea | Minicoy Island | North Island | South Island ";
s_a[20] =
  " Agar | Ajaigarh | Alirajpur | Amarpatan | Amarwada | Ambah | Anuppur | Arone | Ashoknagar | Ashta | Atner | Babaichichli | Badamalhera | Badarwsas | Badnagar | Badnawar | Badwani | Bagli | Baihar | Balaghat | Baldeogarh | Baldi | Bamori | Banda | Bandhavgarh | Bareli | Baroda | Barwaha | Barwani | Batkakhapa | Begamganj | Beohari | Berasia | Berchha | Betul | Bhainsdehi | Bhander | Bhanpura | Bhikangaon | Bhimpur | Bhind | Bhitarwar | Bhopal | Biaora | Bijadandi | Bijawar | Bijaypur | Bina | Birsa | Birsinghpur | Budhni | Burhanpur | Buxwaha | Chachaura | Chanderi | Chaurai | Chhapara | Chhatarpur | Chhindwara | Chicholi | Chitrangi | Churhat | Dabra | Damoh | Datia | Deori | Deosar | Depalpur | Dewas | Dhar | Dharampuri | Dindori | Gadarwara | Gairatganj | Ganjbasoda | Garoth | Ghansour | Ghatia | Ghatigaon | Ghorandogri | Ghughari | Gogaon | Gohad | Goharganj | Gopalganj | Gotegaon | Gourihar | Guna | Gunnore | Gwalior | Gyraspur | Hanumana | Harda | Harrai | Harsud | Hatta | Hoshangabad | Ichhawar | Indore | Isagarh | Itarsi | Jabalpur | Jabera | Jagdalpur | Jaisinghnagar | Jaithari | Jaitpur | Jaitwara | Jamai | Jaora | Jatara | Jawad | Jhabua | Jobat | Jora | Kakaiya | Kannod | Kannodi | Karanjia | Kareli | Karera | Karhal | Karpa | Kasrawad | Katangi | Katni | Keolari | Khachrod | Khajuraho | Khakner | Khalwa | Khandwa | Khaniadhana | Khargone | Khategaon | Khetia | Khilchipur | Khirkiya | Khurai | Kolaras | Kotma | Kukshi | Kundam | Kurwai | Kusmi | Laher | Lakhnadon | Lamta | Lanji | Lateri | Laundi | Maheshwar | Mahidpurcity | Maihar | Majhagwan | Majholi | Malhargarh | Manasa | Manawar | Mandla | Mandsaur | Manpur | Mauganj | Mawai | Mehgaon | Mhow | Morena | Multai | Mungaoli | Nagod | Nainpur | Narsingarh | Narsinghpur | Narwar | Nasrullaganj | Nateran | Neemuch | Niwari | Niwas | Nowgaon | Pachmarhi | Pandhana | Pandhurna | Panna | Parasia | Patan | Patera | Patharia | Pawai | Petlawad | Pichhore | Piparia | Pohari | Prabhapattan | Punasa | Pushprajgarh | Raghogarh | Raghunathpur | Rahatgarh | Raisen | Rajgarh | Rajpur | Ratlam | Rehli | Rewa | Sabalgarh | Sagar | Sailana | Sanwer | Sarangpur | Sardarpur | Satna | Saunsar | Sehore | Sendhwa | Seondha | Seoni | Seonimalwa | Shahdol | Shahnagar | Shahpur | Shajapur | Sheopur | Sheopurkalan | Shivpuri | Shujalpur | Sidhi | Sihora | Silwani | Singrauli | Sirmour | Sironj | Sitamau | Sohagpur | Sondhwa | Sonkatch | Susner | Tamia | Tarana | Tendukheda | Teonthar | Thandla | Tikamgarh | Timarani | Udaipura | Ujjain | Umaria | Umariapan | Vidisha | Vijayraghogarh | Waraseoni | Zhirnia ";
s_a[21] =
  " Achalpur | Aheri | Ahmednagar | Ahmedpur | Ajara | Akkalkot | Akola | Akole | Akot | Alibagh | Amagaon | Amalner | Ambad | Ambejogai | Amravati | Arjuni Merogaon | Arvi | Ashti | Atpadi | Aurangabad | Ausa | Babhulgaon | Balapur | Baramati | Barshi Takli | Barsi | Basmatnagar | Bassein | Beed | Bhadrawati | Bhamregadh | Bhandara | Bhir | Bhiwandi | Bhiwapur | Bhokar | Bhokardan | Bhoom | Bhor | Bhudargad | Bhusawal | Billoli | Brahmapuri | Buldhana | Butibori | Chalisgaon | Chamorshi | Chandgad | Chandrapur | Chandur | Chanwad | Chhikaldara | Chikhali | Chinchwad | Chiplun | Chopda | Chumur | Dahanu | Dapoli | Darwaha | Daryapur | Daund | Degloor | Delhi Tanda | Deogad | Deolgaonraja | Deori | Desaiganj | Dhadgaon | Dhanora | Dharani | Dhiwadi | Dhule | Dhulia | Digras | Dindori | Edalabad | Erandul | Etapalli | Gadhchiroli | Gadhinglaj | Gaganbavada | Gangakhed | Gangapur | Gevrai | Ghatanji | Golegaon | Gondia | Gondpipri | Goregaon | Guhagar | Hadgaon | Hatkangale | Hinganghat | Hingoli | Hingua | Igatpuri | Indapur | Islampur | Jalgaon | Jalna | Jamkhed | Jamner | Jath | Jawahar | Jintdor | Junnar | Kagal | Kaij | Kalamb | Kalamnuri | Kallam | Kalmeshwar | Kalwan | Kalyan | Kamptee | Kandhar | Kankavali | Kannad | Karad | Karjat | Karmala | Katol | Kavathemankal | Kedgaon | Khadakwasala | Khamgaon | Khed | Khopoli | Khultabad | Kinwat | Kolhapur | Kopargaon | Koregaon | Kudal | Kuhi | Kurkheda | Kusumba | Lakhandur | Langa | Latur | Lonar | Lonavala | Madangad | Madha | Mahabaleshwar | Mahad | Mahagaon | Mahasala | Mahaswad | Malegaon | Malgaon | Malgund | Malkapur | Malsuras | Malwan | Mancher | Mangalwedha | Mangaon | Mangrulpur | Manjalegaon | Manmad | Maregaon | Mehda | Mekhar | Mohadi | Mohol | Mokhada | Morshi | Mouda | Mukhed | Mul | Mumbai | Murbad | Murtizapur | Murud | Nagbhir | Nagpur | Nahavara | Nanded | Nandgaon | Nandnva | Nandurbar | Narkhed | Nashik | Navapur | Ner | Newasa | Nilanga | Niphad | Omerga | Osmanabad | Pachora | Paithan | Palghar | Pali | Pandharkawada | Pandharpur | Panhala | Paranda | Parbhani | Parner | Parola | Parseoni | Partur | Patan | Pathardi | Pathari | Patoda | Pauni | Peint | Pen | Phaltan | Pimpalner | Pirangut | Poladpur | Pune | Pusad | Pusegaon | Radhanagar | Rahuri | Raigad | Rajapur | Rajgurunagar | Rajura | Ralegaon | Ramtek | Ratnagiri | Raver | Risod | Roha | Sakarwadi | Sakoli | Sakri | Salekasa | Samudrapur | Sangamner | Sanganeshwar | Sangli | Sangola | Sanguem | Saoner | Saswad | Satana | Satara | Sawantwadi | Seloo | Shahada | Shahapur | Shahuwadi | Shevgaon | Shirala | Shirol | Shirpur | Shirur | Shirwal | Sholapur | Shri Rampur | Shrigonda | Shrivardhan | Sillod | Sinderwahi | Sindhudurg | Sindkheda | Sindkhedaraja | Sinnar | Sironcha | Soyegaon | Surgena | Talasari | Talegaon S.Ji Pant | Taloda | Tasgaon | Thane | Tirora | Tiwasa | Trimbak | Tuljapur | Tumsar | Udgir | Umarkhed | Umrane | Umrer | Urlikanchan | Vaduj | Velhe | Vengurla | Vijapur | Vita | Wada | Wai | Walchandnagar | Wani | Wardha | Warlydwarud | Warora | Washim | Wathar | Yavatmal | Yawal | Yeola | Yeotmal ";
s_a[22] =
  " Bishnupur | Chakpikarong | Chandel | Chattrik | Churachandpur | Imphal | Jiribam | Kakching | Kalapahar | Mao | Mulam | Parbung | Sadarhills | Saibom | Sempang | Senapati | Sochumer | Taloulong | Tamenglong | Thinghat | Thoubal | Ukhrul ";
s_a[23] =
  " Amlaren | Baghmara | Cherrapunjee | Dadengiri | Garo Hills | Jaintia Hills | Jowai | Khasi Hills | Khliehriat | Mariang | Mawkyrwat | Nongpoh | Nongstoin | Resubelpara | Ri Bhoi | Shillong | Tura | Williamnagar";
s_a[24] =
  " Aizawl | Champhai | Demagiri | Kolasib | Lawngtlai | Lunglei | Mamit | Saiha | Serchhip";
s_a[25] =
  " Dimapur | Jalukie | Kiphire | Kohima | Mokokchung | Mon | Phek | Tuensang | Wokha | Zunheboto ";
s_a[26] =
  " Anandapur | Angul | Anugul | Aska | Athgarh | Athmallik | Attabira | Bagdihi | Balangir | Balasore | Baleswar | Baliguda | Balugaon | Banaigarh | Bangiriposi | Barbil | Bargarh | Baripada | Barkot | Basta | Berhampur | Betanati | Bhadrak | Bhanjanagar | Bhawanipatna | Bhubaneswar | Birmaharajpur | Bisam Cuttack | Boriguma | Boudh | Buguda | Chandbali | Chhatrapur | Chhendipada | Cuttack | Daringbadi | Daspalla | Deodgarh | Deogarh | Dhanmandal | Dharamgarh | Dhenkanal | Digapahandi | Dunguripali | G. Udayagiri | Gajapati | Ganjam | Ghatgaon | Gudari | Gunupur | Hemgiri | Hindol | Jagatsinghapur | Jajpur | Jamankira | Jashipur | Jayapatna | Jeypur | Jharigan | Jharsuguda | Jujumura | Kalahandi | Kalimela | Kamakhyanagar | Kandhamal | Kantabhanji | Kantamal | Karanjia | Kashipur | Kendrapara | Kendujhar | Keonjhar | Khalikote | Khordha | Khurda | Komana | Koraput | Kotagarh | Kuchinda | Lahunipara | Laxmipur | M. Rampur | Malkangiri | Mathili | Mayurbhanj | Mohana | Motu | Nabarangapur | Naktideul | Nandapur | Narlaroad | Narsinghpur | Nayagarh | Nimapara | Nowparatan | Nowrangapur | Nuapada | Padampur | Paikamal | Palla Hara | Papadhandi | Parajang | Pardip | Parlakhemundi | Patnagarh | Pattamundai | Phiringia | Phulbani | Puri | Puruna Katak | R. Udayigiri | Rairakhol | Rairangpur | Rajgangpur | Rajkhariar | Rayagada | Rourkela | Sambalpur | Sohela | Sonapur | Soro | Subarnapur | Sunabeda | Sundergarh | Surada | T. Rampur | Talcher | Telkoi | Titlagarh | Tumudibandha | Udala | Umerkote ";
s_a[27] =
  " Bahur | Karaikal | Mahe | Pondicherry | Purnankuppam | Valudavur | Villianur | Yanam ";
s_a[28] =
  " Abohar | Ajnala | Amritsar | Balachaur | Barnala | Batala | Bathinda | Chandigarh | Dasua | Dinanagar | Faridkot | Fatehgarh Sahib | Fazilka | Ferozepur | Garhashanker | Goindwal | Gurdaspur | Guruharsahai | Hoshiarpur | Jagraon | Jalandhar | Jugial | Kapurthala | Kharar | Kotkapura | Ludhiana | Malaut | Malerkotla | Mansa | Moga | Muktasar | Nabha | Nakodar | Nangal | Nawanshahar | Nawanshahr | Pathankot | Patiala | Patti | Phagwara | Phillaur | Phulmandi | Quadian | Rajpura | Raman | Rayya | Ropar | Rupnagar | Samana | Samrala | Sangrur | Sardulgarh | Sarhind | SAS Nagar | Sultanpur Lodhi | Sunam | Tanda Urmar | Tarn Taran | Zira ";
s_a[29] =
  " Abu Road | Ahore | Ajmer | Aklera | Alwar | Amber | Amet | Anupgarh | Asind | Aspur | Atru | Bagidora | Bali | Bamanwas | Banera | Bansur | Banswara | Baran | Bari | Barisadri | Barmer | Baseri | Bassi | Baswa | Bayana | Beawar | Begun | Behror | Bhadra | Bharatpur | Bhilwara | Bhim | Bhinmal | Bikaner | Bilara | Bundi | Chhabra | Chhipaborad | Chirawa | Chittorgarh | Chohtan | Churu | Dantaramgarh | Dausa | Deedwana | Deeg | Degana | Deogarh | Deoli | Desuri | Dhariawad | Dholpur | Digod | Dudu | Dungarpur | Dungla | Fatehpur | Gangapur | Gangdhar | Gerhi | Ghatol | Girwa | Gogunda | Hanumangarh | Hindaun | Hindoli | Hurda | Jahazpur | Jaipur | Jaisalmer | Jalore | Jhalawar | Jhunjhunu | Jodhpur | Kaman | Kapasan | Karauli | Kekri | Keshoraipatan | Khandar | Kherwara | Khetri | Kishanganj | Kishangarh | Kishangarhbas | Kolayat | Kota | Kotputli | Kotra | Kotri | Kumbalgarh | Kushalgarh | Ladnun | Ladpura | Lalsot | Laxmangarh | Lunkaransar | Mahuwa | Malpura | Malvi | Mandal | Mandalgarh | Mandawar | Mangrol | Marwar-Jn | Merta | Nadbai | Nagaur | Nainwa | Nasirabad | Nathdwara | Nawa | Neem Ka Thana | Newai | Nimbahera | Nohar | Nokha | Onli | Osian | Pachpadara | Pachpahar | Padampur | Pali | Parbatsar | Phagi | Phalodi | Pilani | Pindwara | Pipalda | Pirawa | Pokaran | Pratapgarh | Raipur | Raisinghnagar | Rajgarh | Rajsamand | Ramganj Mandi | Ramgarh | Rashmi | Ratangarh | Reodar | Rupbas | Sadulshahar | Sagwara | Sahabad | Salumber | Sanchore | Sangaria | Sangod | Sapotra | Sarada | Sardarshahar | Sarwar | Sawai Madhopur | Shahapura | Sheo | Sheoganj | Shergarh | Sikar | Sirohi | Siwana | Sojat | Sri Dungargarh | Sri Ganganagar | Sri Karanpur | Sri Madhopur | Sujangarh | Taranagar | Thanaghazi | Tibbi | Tijara | Todaraisingh | Tonk | Udaipur | Udaipurwati | Uniayara | Vallabhnagar | Viratnagar ";
s_a[30] =
  " Barmiak | Be | Bhurtuk | Chhubakha | Chidam | Chubha | Chumikteng | Dentam | Dikchu | Dzongri | Gangtok | Gauzing | Gyalshing | Hema | Kerung | Lachen | Lachung | Lema | Lingtam | Lungthu | Mangan | Namchi | Namthang | Nanga | Nantang | Naya Bazar | Padamachen | Pakhyong | Pemayangtse | Phensang | Rangli | Rinchingpong | Sakyong | Samdong | Singtam | Siniolchu | Sombari | Soreng | Sosing | Tekhug | Temi | Tsetang | Tsomgo | Tumlong | Yangang | Yumtang ";
s_a[31] =
  " Ambasamudram | Anamali | Arakandanallur | Arantangi | Aravakurichi | Ariyalur | Arkonam | Arni | Aruppukottai | Attur | Avanashi | Batlagundu | Bhavani | Chengalpattu | Chengam | Chennai | Chidambaram | Chingleput | Coimbatore | Courtallam | Cuddalore | Cumbum | Denkanikoitah | Devakottai | Dharampuram | Dharmapuri | Dindigul | Erode | Gingee | Gobichettipalayam | Gudalur | Gudiyatham | Harur | Hosur | Jayamkondan | Kallkurichi | Kanchipuram | Kangayam | Kanyakumari | Karaikal | Karaikudi | Karur | Keeranur | Kodaikanal | Kodumudi | Kotagiri | Kovilpatti | Krishnagiri | Kulithalai | Kumbakonam | Kuzhithurai | Madurai | Madurantgam | Manamadurai | Manaparai | Mannargudi | Mayiladuthurai | Mayiladutjurai | Mettupalayam | Metturdam | Mudukulathur | Mulanur | Musiri | Nagapattinam | Nagarcoil | Namakkal | Nanguneri | Natham | Neyveli | Nilgiris | Oddanchatram | Omalpur | Ootacamund | Ooty | Orathanad | Palacode | Palani | Palladum | Papanasam | Paramakudi | Pattukottai | Perambalur | Perundurai | Pollachi | Polur | Pondicherry | Ponnamaravathi | Ponneri | Pudukkottai | Rajapalayam | Ramanathapuram | Rameshwaram | Ranipet | Rasipuram | Salem | Sankagiri | Sankaran | Sathiyamangalam | Sivaganga | Sivakasi | Sriperumpudur | Srivaikundam | Tenkasi | Thanjavur | Theni | Thirumanglam | Thiruraipoondi | Thoothukudi | Thuraiyure | Tindivanam | Tiruchendur | Tiruchengode | Tiruchirappalli | Tirunelvelli | Tirupathur | Tirupur | Tiruttani | Tiruvallur | Tiruvannamalai | Tiruvarur | Tiruvellore | Tiruvettipuram | Trichy | Tuticorin | Udumalpet | Ulundurpet | Usiliampatti | Uthangarai | Valapady | Valliyoor | Vaniyambadi | Vedasandur | Vellore | Velur | Vilathikulam | Villupuram | Virudhachalam | Virudhunagar | Wandiwash | Yercaud ";
s_a[32] =
  " Adilabad | Hyderabad | Jagtial | Karimnagar | Khammam | Mahabubnagar | Mancherial | Miryalaguda | Nalgonda | Nizamabad | Ramagundam | Siddipet | Suryapet | Warangal";
s_a[33] =
  " Agartala | Ambasa | Bampurbari | Belonia | Dhalai | Dharam Nagar | Kailashahar | Kamal Krishnabari | Khopaiyapara | Khowai | Phuldungsei | Radha Kishore Pur | Tripura ";
s_a[34] =
  " Achhnera | Agra | Akbarpur | Aliganj | Aligarh | Allahabad | Ambedkar Nagar | Amethi | Amiliya | Amroha | Anola | Atrauli | Auraiya | Azamgarh | Baberu | Badaun | Baghpat | Bagpat | Baheri | Bahraich | Ballia | Balrampur | Banda | Bansdeeh | Bansgaon | Bansi | Barabanki | Bareilly | Basti | Bhadohi | Bharthana | Bharwari | Bhogaon | Bhognipur | Bidhuna | Bijnore | Bikapur | Bilari | Bilgram | Bilhaur | Bindki | Bisalpur | Bisauli | Biswan | Budaun | Budhana | Bulandshahar | Bulandshahr | Capianganj | Chakia | Chandauli | Charkhari | Chhata | Chhibramau | Chirgaon | Chitrakoot | Chunur | Dadri | Dalmau | Dataganj | Debai | Deoband | Deoria | Derapur | Dhampur | Domariyaganj | Dudhi | Etah | Etawah | Faizabad | Farrukhabad | Fatehpur | Firozabad | Garauth | Garhmukteshwar | Gautam Buddha Nagar | Ghatampur | Ghaziabad | Ghazipur | Ghosi | Gonda | Gorakhpur | Gunnaur | Haidergarh | Hamirpur | Hapur | Hardoi | Harraiya | Hasanganj | Hasanpur | Hathras | Jalalabad | Jalaun | Jalesar | Jansath | Jarar | Jasrana | Jaunpur | Jhansi | Jyotiba Phule Nagar | Kadipur | Kaimganj | Kairana | Kaisarganj | Kalpi | Kannauj | Kanpur | Karchhana | Karhal | Karvi | Kasganj | Kaushambi | Kerakat | Khaga | Khair | Khalilabad | Kheri | Konch | Kumaon | Kunda | Kushinagar | Lalganj | Lalitpur | Lucknow | Machlishahar | Maharajganj | Mahoba | Mainpuri | Malihabad | Mariyahu | Math | Mathura | Mau | Maudaha | Maunathbhanjan | Mauranipur | Mawana | Meerut | Mehraun | Meja | Mirzapur | Misrikh | Modinagar | Mohamdabad | Mohamdi | Moradabad | Musafirkhana | Muzaffarnagar | Nagina | Najibabad | Nakur | Nanpara | Naraini | Naugarh | Nawabganj | Nighasan | Noida | Orai | Padrauna | Pahasu | Patti | Pharenda | Phoolpur | Phulpur | Pilibhit | Pitamberpur | Powayan | Pratapgarh | Puranpur | Purwa | Raibareli | Rampur | Ramsanehi Ghat | Rasara | Rath | Robertsganj | Sadabad | Safipur | Sagri | Saharanpur | Sahaswan | Sahjahanpur | Saidpur | Salempur | Salon | Sambhal | Sandila | Sant Kabir Nagar | Sant Ravidas Nagar | Sardhana | Shahabad | Shahganj | Shahjahanpur | Shikohabad | Shravasti | Siddharthnagar | Sidhauli | Sikandra Rao | Sikandrabad | Sitapur | Siyana | Sonbhadra | Soraon | Sultanpur | Tanda | Tarabganj | Tilhar | Unnao | Utraula | Varanasi | Zamania ";
s_a[35] =
  " Almora | Bageshwar | Bhatwari | Chakrata | Chamoli | Champawat | Dehradun | Deoprayag | Dharchula | Dunda | Haldwani | Haridwar | Joshimath | Karan Prayag | Kashipur | Khatima | Kichha | Lansdown | Munsiari | Mussoorie | Nainital | Pantnagar | Partapnagar | Pauri Garhwal | Pithoragarh | Purola | Rajgarh | Ranikhet | Roorkee | Rudraprayag | Tehri Garhwal | Udham Singh Nagar | Ukhimath | Uttarkashi ";
s_a[36] =
  " Adra | Alipurduar | Amlagora | Arambagh | Asansol | Balurghat | Bankura | Bardhaman | Basirhat | Berhampur | Bethuadahari | Birbhum | Birpara | Bishanpur | Bolpur | Bongoan | Bulbulchandi | Burdwan | Calcutta | Canning | Champadanga | Contai | Cooch Behar | Daimond Harbour | Dalkhola | Dantan | Darjeeling | Dhaniakhali | Dhuliyan | Dinajpur | Dinhata | Durgapur | Gangajalghati | Gangarampur | Ghatal | Guskara | Habra | Haldia | Harirampur | Harishchandrapur | Hooghly | Howrah | Islampur | Jagatballavpur | Jalpaiguri | Jhalda | Jhargram | Kakdwip | Kalchini | Kalimpong | Kalna | Kandi | Karimpur | Katwa | Kharagpur | Khatra | Krishnanagar | Mal Bazar | Malda | Manbazar | Mathabhanga | Medinipur | Mekhliganj | Mirzapur | Murshidabad | Nadia | Nagarakata | Nalhati | Nayagarh | Parganas | Purulia | Raiganj | Rampur Hat | Ranaghat | Seharabazar | Siliguri | Suri | Takipur | Tamluk";

export default class KaizenForm extends React.Component {
  constructor() {
    super();
    this.state_arr = new Array(
      "Andaman & Nicobar",
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chandigarh",
      "Chhattisgarh",
      "Dadra & Nagar Haveli",
      "Daman & Diu",
      "Delhi",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jammu & Kashmir",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Lakshadweep",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Orissa",
      "Pondicherry",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttaranchal",
      "West Bengal"
    );

    s_a = new Array();
    s_a[0] = "";
    s_a[1] =
      " Alipur | Andaman Island | Anderson Island | Arainj-Laka-Punga | Austinabad | Bamboo Flat | Barren Island | Beadonabad | Betapur | Bindraban | Bonington | Brookesabad | Cadell Point | Calicut | Chetamale | Cinque Islands | Defence Island | Digilpur | Dolyganj | Flat Island | Geinyale | Great Coco Island | Haddo | Havelock Island | Henry Lawrence Island | Herbertabad | Hobdaypur | Ilichar | Ingoie | Inteview Island | Jangli Ghat | Jhon Lawrence Island | Karen | Kartara | KYD Islannd | Landfall Island | Little Andmand | Little Coco Island | Long Island | Maimyo | Malappuram | Manglutan | Manpur | Mitha Khari | Neill Island | Nicobar Island | North Brother Island | North Passage Island | North Sentinel Island | Nothen Reef Island | Outram Island | Pahlagaon | Palalankwe | Passage Island | Phaiapong | Phoenix Island | Port Blair | Preparis Island | Protheroepur | Rangachang | Rongat | Rutland Island | Sabari | Saddle Peak | Shadipur | Smith Island | Sound Island | South Sentinel Island | Spike Island | Tarmugli Island | Taylerabad | Titaije | Toibalawe | Tusonabad | West Island | Wimberleyganj | Yadita";
    s_a[2] =
      " Achampet | Adilabad | Adoni | Alampur | Allagadda | Alur | Amalapuram | Amangallu | Anakapalle | Anantapur | Andole | Araku | Armoor | Asifabad | Aswaraopet | Atmakur | B. Kothakota | Badvel | Banaganapalle | Bandar | Bangarupalem | Banswada | Bapatla | Bellampalli | Bhadrachalam | Bhainsa | Bheemunipatnam | Bhimadole | Bhimavaram | Bhongir | Bhooragamphad | Boath | Bobbili | Bodhan | Chandoor | Chavitidibbalu | Chejerla | Chepurupalli | Cherial | Chevella | Chinnor | Chintalapudi | Chintapalle | Chirala | Chittoor | Chodavaram | Cuddapah | Cumbum | Darsi | Devarakonda | Dharmavaram | Dichpalli | Divi | Donakonda | Dronachalam | East Godavari | Eluru | Eturnagaram | Gadwal | Gajapathinagaram | Gajwel | Garladinne | Giddalur | Godavari | Gooty | Gudivada | Gudur | Guntur | Hindupur | Hunsabad | Huzurabad | Huzurnagar | Hyderabad | Ibrahimpatnam | Jaggayyapet | Jagtial | Jammalamadugu | Jangaon | Jangareddygudem | Jannaram | Kadiri | Kaikaluru | Kakinada | Kalwakurthy | Kalyandurg | Kamalapuram | Kamareddy | Kambadur | Kanaganapalle | Kandukuru | Kanigiri | Karimnagar | Kavali | Khammam | Khanapur (AP) | Kodangal | Koduru | Koilkuntla | Kollapur | Kothagudem | Kovvur | Krishna | Krosuru | Kuppam | Kurnool | Lakkireddipalli | Madakasira | Madanapalli | Madhira | Madnur | Mahabubabad | Mahabubnagar | Mahadevapur | Makthal | Mancherial | Mandapeta | Mangalagiri | Manthani | Markapur | Marturu | Medachal | Medak | Medarmetla | Metpalli | Mriyalguda | Mulug | Mylavaram | Nagarkurnool | Nalgonda | Nallacheruvu | Nampalle | Nandigama | Nandikotkur | Nandyal | Narasampet | Narasaraopet | Narayanakhed | Narayanpet | Narsapur | Narsipatnam | Nazvidu | Nelloe | Nellore | Nidamanur | Nirmal | Nizamabad | Nuguru | Ongole | Outsarangapalle | Paderu | Pakala | Palakonda | Paland | Palmaneru | Pamuru | Pargi | Parkal | Parvathipuram | Pathapatnam | Pattikonda | Peapalle | Peddapalli | Peddapuram | Penukonda | Piduguralla | Piler | Pithapuram | Podili | Polavaram | Prakasam | Proddatur | Pulivendla | Punganur | Putturu | Rajahmundri | Rajampeta | Ramachandrapuram | Ramannapet | Rampachodavaram | Rangareddy | Rapur | Rayachoti | Rayadurg | Razole | Repalle | Saluru | Sangareddy | Sathupalli | Sattenapalle | Satyavedu | Shadnagar | Siddavattam | Siddipet | Sileru | Sircilla | Sirpur Kagaznagar | Sodam | Sompeta | Srikakulam | Srikalahasthi | Srisailam | Srungavarapukota | Sudhimalla | Sullarpet | Tadepalligudem | Tadipatri | Tanduru | Tanuku | Tekkali | Tenali | Thungaturthy | Tirivuru | Tirupathi | Tuni | Udaygiri | Ulvapadu | Uravakonda | Utnor | V.R. Puram | Vaimpalli | Vayalpad | Venkatgiri | Venkatgirikota | Vijayawada | Vikrabad | Vinjamuru | Vinukonda | Visakhapatnam | Vizayanagaram | Vizianagaram | Vuyyuru | Wanaparthy | Warangal | Wardhannapet | Yelamanchili | Yelavaram | Yeleswaram | Yellandu | Yellanuru | Yellareddy | Yerragondapalem | Zahirabad ";
    s_a[3] =
      " Along | Anini | Anjaw | Bameng | Basar | Changlang | Chowkhem | Daporizo | Dibang Valley | Dirang | Hayuliang | Huri | Itanagar | Jairampur | Kalaktung | Kameng | Khonsa | Kolaring | Kurung Kumey | Lohit | Lower Dibang Valley | Lower Subansiri | Mariyang | Mechuka | Miao | Nefra | Pakkekesang | Pangin | Papum Pare | Passighat | Roing | Sagalee | Seppa | Siang | Tali | Taliha | Tawang | Tezu | Tirap | Tuting | Upper Siang | Upper Subansiri | Yiang Kiag ";
    s_a[4] =
      " Abhayapuri | Baithalangshu | Barama | Barpeta Road | Bihupuria | Bijni | Bilasipara | Bokajan | Bokakhat | Boko | Bongaigaon | Cachar | Cachar Hills | Darrang | Dhakuakhana | Dhemaji | Dhubri | Dibrugarh | Digboi | Diphu | Goalpara | Gohpur | Golaghat | Guwahati | Hailakandi | Hajo | Halflong | Hojai | Howraghat | Jorhat | Kamrup | Karbi Anglong | Karimganj | Kokarajhar | Kokrajhar | Lakhimpur | Maibong | Majuli | Mangaldoi | Mariani | Marigaon | Moranhat | Morigaon | Nagaon | Nalbari | Rangapara | Sadiya | Sibsagar | Silchar | Sivasagar | Sonitpur | Tarabarihat | Tezpur | Tinsukia | Udalgiri | Udalguri | UdarbondhBarpeta";
    s_a[5] =
      " Adhaura | Amarpur | Araria | Areraj | Arrah | Arwal | Aurangabad | Bagaha | Banka | Banmankhi | Barachakia | Barauni | Barh | Barosi | Begusarai | Benipatti | Benipur | Bettiah | Bhabhua | Bhagalpur | Bhojpur | Bidupur | Biharsharif | Bikram | Bikramganj | Birpur | Buxar | Chakai | Champaran | Chapara | Dalsinghsarai | Danapur | Darbhanga | Daudnagar | Dhaka | Dhamdaha | Dumraon | Ekma | Forbesganj | Gaya | Gogri | Gopalganj | H.Kharagpur | Hajipur | Hathua | Hilsa | Imamganj | Jahanabad | Jainagar | Jamshedpur | Jamui | Jehanabad | Jhajha | Jhanjharpur | Kahalgaon | Kaimur (Bhabua) | Katihar | Katoria | Khagaria | Kishanganj | Korha | Lakhisarai | Madhepura | Madhubani | Maharajganj | Mahua | Mairwa | Mallehpur | Masrakh | Mohania | Monghyr | Motihari | Motipur | Munger | Muzaffarpur | Nabinagar | Nalanda | Narkatiaganj | Naugachia | Nawada | Pakribarwan | Pakridayal | Patna | Phulparas | Piro | Pupri | Purena | Purnia | Rafiganj | Rajauli | Ramnagar | Raniganj | Raxaul | Rohtas | Rosera | S.Bakhtiarpur | Saharsa | Samastipur | Saran | Sasaram | Seikhpura | Sheikhpura | Sheohar | Sherghati | Sidhawalia | Singhwara | Sitamarhi | Siwan | Sonepur | Supaul | Thakurganj | Triveniganj | Udakishanganj | Vaishali | Wazirganj";
    s_a[6] = " Chandigarh | Mani Marja";
    s_a[7] =
      " Ambikapur | Antagarh | Arang | Bacheli | Bagbahera | Bagicha | Baikunthpur | Balod | Balodabazar | Balrampur | Barpalli | Basana | Bastanar | Bastar | Bderajpur | Bemetara | Berla | Bhairongarh | Bhanupratappur | Bharathpur | Bhatapara | Bhilai | Bhilaigarh | Bhopalpatnam | Bijapur | Bilaspur | Bodla | Bokaband | Chandipara | Chhinagarh | Chhuriakala | Chingmut | Chuikhadan | Dabhara | Dallirajhara | Dantewada | Deobhog | Dhamda | Dhamtari | Dharamjaigarh | Dongargarh | Durg | Durgakondal | Fingeshwar | Gariaband | Garpa | Gharghoda | Gogunda | Ilamidi | Jagdalpur | Janjgir | Janjgir-Champa | Jarwa | Jashpur | Jashpurnagar | Kabirdham-Kawardha | Kanker | Kasdol | Kathdol | Kathghora | Kawardha | Keskal | Khairgarh | Kondagaon | Konta | Korba | Korea | Kota | Koyelibeda | Kuakunda | Kunkuri | Kurud | Lohadigundah | Lormi | Luckwada | Mahasamund | Makodi | Manendragarh | Manpur | Marwahi | Mohla | Mungeli | Nagri | Narainpur | Narayanpur | Neora | Netanar | Odgi | Padamkot | Pakhanjur | Pali | Pandaria | Pandishankar | Parasgaon | Pasan | Patan | Pathalgaon | Pendra | Pratappur | Premnagar | Raigarh | Raipur | Rajnandgaon | Rajpur | Ramchandrapur | Saraipali | Saranggarh | Sarona | Semaria | Shakti | Sitapur | Sukma | Surajpur | Surguja | Tapkara | Toynar | Udaipur | Uproda | Wadrainagar";
    s_a[8] =
      " Amal | Amli | Bedpa | Chikhli | Dadra & Nagar Haveli | Dahikhed | Dolara | Galonda | Kanadi | Karchond | Khadoli | Kharadpada | Kherabari | Kherdi | Kothar | Luari | Mashat | Rakholi | Rudana | Saili | Sili | Silvassa | Sindavni | Udva | Umbarkoi | Vansda | Vasona | Velugam ";
    s_a[9] =
      " Brancavare | Dagasi | Daman | Diu | Magarvara | Nagwa | Pariali | Passo Covo ";
    s_a[10] =
      " Central Delhi | East Delhi | New Delhi | North Delhi | North East Delhi | North West Delhi | South Delhi | South West Delhi | West Delhi ";
    s_a[11] =
      " Canacona | Candolim | Chinchinim | Cortalim | Goa | Jua | Madgaon | Mahem | Mapuca | Marmagao | Panji | Ponda | Sanvordem | Terekhol ";
    s_a[12] =
      " Ahmedabad | Ahwa | Amod | Amreli | Anand | Anjar | Ankaleshwar | Babra | Balasinor | Banaskantha | Bansada | Bardoli | Bareja | Baroda | Barwala | Bayad | Bhachav | Bhanvad | Bharuch | Bhavnagar | Bhiloda | Bhuj | Billimora | Borsad | Botad | Chanasma | Chhota Udaipur | Chotila | Dabhoi | Dahod | Damnagar | Dang | Danta | Dasada | Dediapada | Deesa | Dehgam | Deodar | Devgadhbaria | Dhandhuka | Dhanera | Dharampur | Dhari | Dholka | Dhoraji | Dhrangadhra | Dhrol | Dwarka | Fortsongadh | Gadhada | Gandhi Nagar | Gariadhar | Godhra | Gogodar | Gondal | Halol | Halvad | Harij | Himatnagar | Idar | Jambusar | Jamjodhpur | Jamkalyanpur | Jamnagar | Jasdan | Jetpur | Jhagadia | Jhalod | Jodia | Junagadh | Junagarh | Kalawad | Kalol | Kapad Wanj | Keshod | Khambat | Khambhalia | Khavda | Kheda | Khedbrahma | Kheralu | Kodinar | Kotdasanghani | Kunkawav | Kutch | Kutchmandvi | Kutiyana | Lakhpat | Lakhtar | Lalpur | Limbdi | Limkheda | Lunavada | M.M.Mangrol | Mahuva | Malia-Hatina | Maliya | Malpur | Manavadar | Mandvi | Mangrol | Mehmedabad | Mehsana | Miyagam | Modasa | Morvi | Muli | Mundra | Nadiad | Nakhatrana | Nalia | Narmada | Naswadi | Navasari | Nizar | Okha | Paddhari | Padra | Palanpur | Palitana | Panchmahals | Patan | Pavijetpur | Porbandar | Prantij | Radhanpur | Rahpar | Rajaula | Rajkot | Rajpipla | Ranavav | Sabarkantha | Sanand | Sankheda | Santalpur | Santrampur | Savarkundla | Savli | Sayan | Sayla | Shehra | Sidhpur | Sihor | Sojitra | Sumrasar | Surat | Surendranagar | Talaja | Thara | Tharad | Thasra | Una-Diu | Upleta | Vadgam | Vadodara | Valia | Vallabhipur | Valod | Valsad | Vanthali | Vapi | Vav | Veraval | Vijapur | Viramgam | Visavadar | Visnagar | Vyara | Waghodia | Wankaner ";
    s_a[13] =
      " Adampur Mandi | Ambala | Assandh | Bahadurgarh | Barara | Barwala | Bawal | Bawanikhera | Bhiwani | Charkhidadri | Cheeka | Chhachrauli | Dabwali | Ellenabad | Faridabad | Fatehabad | Ferojpur Jhirka | Gharaunda | Gohana | Gurgaon | Hansi | Hisar | Jagadhari | Jatusana | Jhajjar | Jind | Julana | Kaithal | Kalanaur | Kalanwali | Kalka | Karnal | Kosli | Kurukshetra | Loharu | Mahendragarh | Meham | Mewat | Mohindergarh | Naraingarh | Narnaul | Narwana | Nilokheri | Nuh | Palwal | Panchkula | Panipat | Pehowa | Ratia | Rewari | Rohtak | Safidon | Sirsa | Siwani | Sonipat | Tohana | Tohsam | Yamunanagar ";
    s_a[14] =
      " Amb | Arki | Banjar | Bharmour | Bilaspur | Chamba | Churah | Dalhousie | Dehra Gopipur | Hamirpur | Jogindernagar | Kalpa | Kangra | Kinnaur | Kullu | Lahaul | Mandi | Nahan | Nalagarh | Nirmand | Nurpur | Palampur | Pangi | Paonta | Pooh | Rajgarh | Rampur Bushahar | Rohru | Shimla | Sirmaur | Solan | Spiti | Sundernagar | Theog | Udaipur | Una";
    s_a[15] =
      " Akhnoor | Anantnag | Badgam | Bandipur | Baramulla | Basholi | Bedarwah | Budgam | Doda | Gulmarg | Jammu | Kalakot | Kargil | Karnah | Kathua | Kishtwar | Kulgam | Kupwara | Leh | Mahore | Nagrota | Nobra | Nowshera | Nyoma | Padam | Pahalgam | Patnitop | Poonch | Pulwama | Rajouri | Ramban | Ramnagar | Reasi | Samba | Srinagar | Udhampur | Vaishno Devi ";
    s_a[16] =
      " Bagodar | Baharagora | Balumath | Barhi | Barkagaon | Barwadih | Basia | Bermo | Bhandaria | Bhawanathpur | Bishrampur | Bokaro | Bolwa | Bundu | Chaibasa | Chainpur | Chakardharpur | Chandil | Chatra | Chavparan | Daltonganj | Deoghar | Dhanbad | Dumka | Dumri | Garhwa | Garu | Ghaghra | Ghatsila | Giridih | Godda | Gomia | Govindpur | Gumla | Hazaribagh | Hunterganj | Ichak | Itki | Jagarnathpur | Jamshedpur | Jamtara | Japla | Jharmundi | Jhinkpani | Jhumaritalaiya | Kathikund | Kharsawa | Khunti | Koderma | Kolebira | Latehar | Lohardaga | Madhupur | Mahagama | Maheshpur Raj | Mandar | Mandu | Manoharpur | Muri | Nagarutatri | Nala | Noamundi | Pakur | Palamu | Palkot | Patan | Rajdhanwar | Rajmahal | Ramgarh | Ranchi | Sahibganj | Saraikela | Simaria | Simdega | Singhbhum | Tisri | Torpa ";
    s_a[17] =
      " Afzalpur | Ainapur | Aland | Alur | Anekal | Ankola | Arsikere | Athani | Aurad | Bableshwar | Badami | Bagalkot | Bagepalli | Bailhongal | Bangalore | Bangalore Rural | Bangarpet | Bantwal | Basavakalyan | Basavanabagewadi | Basavapatna | Belgaum | Bellary | Belthangady | Belur | Bhadravati | Bhalki | Bhatkal | Bidar | Bijapur | Biligi | Chadchan | Challakere | Chamrajnagar | Channagiri | Channapatna | Channarayapatna | Chickmagalur | Chikballapur | Chikkaballapur | Chikkanayakanahalli | Chikkodi | Chikmagalur | Chincholi | Chintamani | Chitradurga | Chittapur | Cowdahalli | Davanagere | Deodurga | Devangere | Devarahippargi | Dharwad | Doddaballapur | Gadag | Gangavathi | Gokak | Gowribdanpur | Gubbi | Gulbarga | Gundlupet | H.B.Halli | H.D. Kote | Haliyal | Hampi | Hangal | Harapanahalli | Hassan | Haveri | Hebri | Hirekerur | Hiriyur | Holalkere | Holenarsipur | Honnali | Honnavar | Hosadurga | Hosakote | Hosanagara | Hospet | Hubli | Hukkeri | Humnabad | Hungund | Hunsagi | Hunsur | Huvinahadagali | Indi | Jagalur | Jamkhandi | Jewargi | Joida | K.R. Nagar | Kadur | Kalghatagi | Kamalapur | Kanakapura | Kannada | Kargal | Karkala | Karwar | Khanapur | Kodagu | Kolar | Kollegal | Koppa | Koppal | Koratageri | Krishnarajapet | Kudligi | Kumta | Kundapur | Kundgol | Kunigal | Kurugodu | Kustagi | Lingsugur | Madikeri | Madugiri | Malavalli | Malur | Mandya | Mangalore | Manipal | Manvi | Mashal | Molkalmuru | Mudalgi | Muddebihal | Mudhol | Mudigere | Mulbagal | Mundagod | Mundargi | Murugod | Mysore | Nagamangala | Nanjangud | Nargund | Narsimrajapur | Navalgund | Nelamangala | Nimburga | Pandavapura | Pavagada | Puttur | Raibag | Raichur | Ramdurg | Ranebennur | Ron | Sagar | Sakleshpur | Salkani | Sandur | Saundatti | Savanur | Sedam | Shahapur | Shankarnarayana | Shikaripura | Shimoga | Shirahatti | Shorapur | Siddapur | Sidlaghatta | Sindagi | Sindhanur | Sira | Sirsi | Siruguppa | Somwarpet | Sorab | Sringeri | Sriniwaspur | Srirangapatna | Sullia | T. Narsipur | Tallak | Tarikere | Telgi | Thirthahalli | Tiptur | Tumkur | Turuvekere | Udupi | Virajpet | Wadi | Yadgiri | Yelburga | Yellapur ";
    s_a[18] =
      " Adimaly | Adoor | Agathy | Alappuzha | Alathur | Alleppey | Alwaye | Amini | Androth | Attingal | Badagara | Bitra | Calicut | Cannanore | Chetlet | Ernakulam | Idukki | Irinjalakuda | Kadamath | Kalpeni | Kalpetta | Kanhangad | Kanjirapally | Kannur | Karungapally | Kasargode | Kavarathy | Kiltan | Kochi | Koduvayur | Kollam | Kottayam | Kovalam | Kozhikode | Kunnamkulam | Malappuram | Mananthodi | Manjeri | Mannarghat | Mavelikkara | Minicoy | Munnar | Muvattupuzha | Nedumandad | Nedumgandam | Nilambur | Palai | Palakkad | Palghat | Pathaanamthitta | Pathanamthitta | Payyanur | Peermedu | Perinthalmanna | Perumbavoor | Punalur | Quilon | Ranni | Shertallai | Shoranur | Taliparamba | Tellicherry | Thiruvananthapuram | Thodupuzha | Thrissur | Tirur | Tiruvalla | Trichur | Trivandrum | Uppala | Vadakkanchery | Vikom | Wayanad ";
    s_a[19] =
      " Agatti Island | Bingaram Island | Bitra Island | Chetlat Island | Kadmat Island | Kalpeni Island | Kavaratti Island | Kiltan Island | Lakshadweep Sea | Minicoy Island | North Island | South Island ";
    s_a[20] =
      " Agar | Ajaigarh | Alirajpur | Amarpatan | Amarwada | Ambah | Anuppur | Arone | Ashoknagar | Ashta | Atner | Babaichichli | Badamalhera | Badarwsas | Badnagar | Badnawar | Badwani | Bagli | Baihar | Balaghat | Baldeogarh | Baldi | Bamori | Banda | Bandhavgarh | Bareli | Baroda | Barwaha | Barwani | Batkakhapa | Begamganj | Beohari | Berasia | Berchha | Betul | Bhainsdehi | Bhander | Bhanpura | Bhikangaon | Bhimpur | Bhind | Bhitarwar | Bhopal | Biaora | Bijadandi | Bijawar | Bijaypur | Bina | Birsa | Birsinghpur | Budhni | Burhanpur | Buxwaha | Chachaura | Chanderi | Chaurai | Chhapara | Chhatarpur | Chhindwara | Chicholi | Chitrangi | Churhat | Dabra | Damoh | Datia | Deori | Deosar | Depalpur | Dewas | Dhar | Dharampuri | Dindori | Gadarwara | Gairatganj | Ganjbasoda | Garoth | Ghansour | Ghatia | Ghatigaon | Ghorandogri | Ghughari | Gogaon | Gohad | Goharganj | Gopalganj | Gotegaon | Gourihar | Guna | Gunnore | Gwalior | Gyraspur | Hanumana | Harda | Harrai | Harsud | Hatta | Hoshangabad | Ichhawar | Indore | Isagarh | Itarsi | Jabalpur | Jabera | Jagdalpur | Jaisinghnagar | Jaithari | Jaitpur | Jaitwara | Jamai | Jaora | Jatara | Jawad | Jhabua | Jobat | Jora | Kakaiya | Kannod | Kannodi | Karanjia | Kareli | Karera | Karhal | Karpa | Kasrawad | Katangi | Katni | Keolari | Khachrod | Khajuraho | Khakner | Khalwa | Khandwa | Khaniadhana | Khargone | Khategaon | Khetia | Khilchipur | Khirkiya | Khurai | Kolaras | Kotma | Kukshi | Kundam | Kurwai | Kusmi | Laher | Lakhnadon | Lamta | Lanji | Lateri | Laundi | Maheshwar | Mahidpurcity | Maihar | Majhagwan | Majholi | Malhargarh | Manasa | Manawar | Mandla | Mandsaur | Manpur | Mauganj | Mawai | Mehgaon | Mhow | Morena | Multai | Mungaoli | Nagod | Nainpur | Narsingarh | Narsinghpur | Narwar | Nasrullaganj | Nateran | Neemuch | Niwari | Niwas | Nowgaon | Pachmarhi | Pandhana | Pandhurna | Panna | Parasia | Patan | Patera | Patharia | Pawai | Petlawad | Pichhore | Piparia | Pohari | Prabhapattan | Punasa | Pushprajgarh | Raghogarh | Raghunathpur | Rahatgarh | Raisen | Rajgarh | Rajpur | Ratlam | Rehli | Rewa | Sabalgarh | Sagar | Sailana | Sanwer | Sarangpur | Sardarpur | Satna | Saunsar | Sehore | Sendhwa | Seondha | Seoni | Seonimalwa | Shahdol | Shahnagar | Shahpur | Shajapur | Sheopur | Sheopurkalan | Shivpuri | Shujalpur | Sidhi | Sihora | Silwani | Singrauli | Sirmour | Sironj | Sitamau | Sohagpur | Sondhwa | Sonkatch | Susner | Tamia | Tarana | Tendukheda | Teonthar | Thandla | Tikamgarh | Timarani | Udaipura | Ujjain | Umaria | Umariapan | Vidisha | Vijayraghogarh | Waraseoni | Zhirnia ";
    s_a[21] =
      " Achalpur | Aheri | Ahmednagar | Ahmedpur | Ajara | Akkalkot | Akola | Akole | Akot | Alibagh | Amagaon | Amalner | Ambad | Ambejogai | Amravati | Arjuni Merogaon | Arvi | Ashti | Atpadi | Aurangabad | Ausa | Babhulgaon | Balapur | Baramati | Barshi Takli | Barsi | Basmatnagar | Bassein | Beed | Bhadrawati | Bhamregadh | Bhandara | Bhir | Bhiwandi | Bhiwapur | Bhokar | Bhokardan | Bhoom | Bhor | Bhudargad | Bhusawal | Billoli | Brahmapuri | Buldhana | Butibori | Chalisgaon | Chamorshi | Chandgad | Chandrapur | Chandur | Chanwad | Chhikaldara | Chikhali | Chinchwad | Chiplun | Chopda | Chumur | Dahanu | Dapoli | Darwaha | Daryapur | Daund | Degloor | Delhi Tanda | Deogad | Deolgaonraja | Deori | Desaiganj | Dhadgaon | Dhanora | Dharani | Dhiwadi | Dhule | Dhulia | Digras | Dindori | Edalabad | Erandul | Etapalli | Gadhchiroli | Gadhinglaj | Gaganbavada | Gangakhed | Gangapur | Gevrai | Ghatanji | Golegaon | Gondia | Gondpipri | Goregaon | Guhagar | Hadgaon | Hatkangale | Hinganghat | Hingoli | Hingua | Igatpuri | Indapur | Islampur | Jalgaon | Jalna | Jamkhed | Jamner | Jath | Jawahar | Jintdor | Junnar | Kagal | Kaij | Kalamb | Kalamnuri | Kallam | Kalmeshwar | Kalwan | Kalyan | Kamptee | Kandhar | Kankavali | Kannad | Karad | Karjat | Karmala | Katol | Kavathemankal | Kedgaon | Khadakwasala | Khamgaon | Khed | Khopoli | Khultabad | Kinwat | Kolhapur | Kopargaon | Koregaon | Kudal | Kuhi | Kurkheda | Kusumba | Lakhandur | Langa | Latur | Lonar | Lonavala | Madangad | Madha | Mahabaleshwar | Mahad | Mahagaon | Mahasala | Mahaswad | Malegaon | Malgaon | Malgund | Malkapur | Malsuras | Malwan | Mancher | Mangalwedha | Mangaon | Mangrulpur | Manjalegaon | Manmad | Maregaon | Mehda | Mekhar | Mohadi | Mohol | Mokhada | Morshi | Mouda | Mukhed | Mul | Mumbai | Murbad | Murtizapur | Murud | Nagbhir | Nagpur | Nahavara | Nanded | Nandgaon | Nandnva | Nandurbar | Narkhed | Nashik | Navapur | Ner | Newasa | Nilanga | Niphad | Omerga | Osmanabad | Pachora | Paithan | Palghar | Pali | Pandharkawada | Pandharpur | Panhala | Paranda | Parbhani | Parner | Parola | Parseoni | Partur | Patan | Pathardi | Pathari | Patoda | Pauni | Peint | Pen | Phaltan | Pimpalner | Pirangut | Poladpur | Pune | Pusad | Pusegaon | Radhanagar | Rahuri | Raigad | Rajapur | Rajgurunagar | Rajura | Ralegaon | Ramtek | Ratnagiri | Raver | Risod | Roha | Sakarwadi | Sakoli | Sakri | Salekasa | Samudrapur | Sangamner | Sanganeshwar | Sangli | Sangola | Sanguem | Saoner | Saswad | Satana | Satara | Sawantwadi | Seloo | Shahada | Shahapur | Shahuwadi | Shevgaon | Shirala | Shirol | Shirpur | Shirur | Shirwal | Sholapur | Shri Rampur | Shrigonda | Shrivardhan | Sillod | Sinderwahi | Sindhudurg | Sindkheda | Sindkhedaraja | Sinnar | Sironcha | Soyegaon | Surgena | Talasari | Talegaon S.Ji Pant | Taloda | Tasgaon | Thane | Tirora | Tiwasa | Trimbak | Tuljapur | Tumsar | Udgir | Umarkhed | Umrane | Umrer | Urlikanchan | Vaduj | Velhe | Vengurla | Vijapur | Vita | Wada | Wai | Walchandnagar | Wani | Wardha | Warlydwarud | Warora | Washim | Wathar | Yavatmal | Yawal | Yeola | Yeotmal ";
    s_a[22] =
      " Bishnupur | Chakpikarong | Chandel | Chattrik | Churachandpur | Imphal | Jiribam | Kakching | Kalapahar | Mao | Mulam | Parbung | Sadarhills | Saibom | Sempang | Senapati | Sochumer | Taloulong | Tamenglong | Thinghat | Thoubal | Ukhrul ";
    s_a[23] =
      " Amlaren | Baghmara | Cherrapunjee | Dadengiri | Garo Hills | Jaintia Hills | Jowai | Khasi Hills | Khliehriat | Mariang | Mawkyrwat | Nongpoh | Nongstoin | Resubelpara | Ri Bhoi | Shillong | Tura | Williamnagar";
    s_a[24] =
      " Aizawl | Champhai | Demagiri | Kolasib | Lawngtlai | Lunglei | Mamit | Saiha | Serchhip";
    s_a[25] =
      " Dimapur | Jalukie | Kiphire | Kohima | Mokokchung | Mon | Phek | Tuensang | Wokha | Zunheboto ";
    s_a[26] =
      " Anandapur | Angul | Anugul | Aska | Athgarh | Athmallik | Attabira | Bagdihi | Balangir | Balasore | Baleswar | Baliguda | Balugaon | Banaigarh | Bangiriposi | Barbil | Bargarh | Baripada | Barkot | Basta | Berhampur | Betanati | Bhadrak | Bhanjanagar | Bhawanipatna | Bhubaneswar | Birmaharajpur | Bisam Cuttack | Boriguma | Boudh | Buguda | Chandbali | Chhatrapur | Chhendipada | Cuttack | Daringbadi | Daspalla | Deodgarh | Deogarh | Dhanmandal | Dharamgarh | Dhenkanal | Digapahandi | Dunguripali | G. Udayagiri | Gajapati | Ganjam | Ghatgaon | Gudari | Gunupur | Hemgiri | Hindol | Jagatsinghapur | Jajpur | Jamankira | Jashipur | Jayapatna | Jeypur | Jharigan | Jharsuguda | Jujumura | Kalahandi | Kalimela | Kamakhyanagar | Kandhamal | Kantabhanji | Kantamal | Karanjia | Kashipur | Kendrapara | Kendujhar | Keonjhar | Khalikote | Khordha | Khurda | Komana | Koraput | Kotagarh | Kuchinda | Lahunipara | Laxmipur | M. Rampur | Malkangiri | Mathili | Mayurbhanj | Mohana | Motu | Nabarangapur | Naktideul | Nandapur | Narlaroad | Narsinghpur | Nayagarh | Nimapara | Nowparatan | Nowrangapur | Nuapada | Padampur | Paikamal | Palla Hara | Papadhandi | Parajang | Pardip | Parlakhemundi | Patnagarh | Pattamundai | Phiringia | Phulbani | Puri | Puruna Katak | R. Udayigiri | Rairakhol | Rairangpur | Rajgangpur | Rajkhariar | Rayagada | Rourkela | Sambalpur | Sohela | Sonapur | Soro | Subarnapur | Sunabeda | Sundergarh | Surada | T. Rampur | Talcher | Telkoi | Titlagarh | Tumudibandha | Udala | Umerkote ";
    s_a[27] =
      " Bahur | Karaikal | Mahe | Pondicherry | Purnankuppam | Valudavur | Villianur | Yanam ";
    s_a[28] =
      " Abohar | Ajnala | Amritsar | Balachaur | Barnala | Batala | Bathinda | Chandigarh | Dasua | Dinanagar | Faridkot | Fatehgarh Sahib | Fazilka | Ferozepur | Garhashanker | Goindwal | Gurdaspur | Guruharsahai | Hoshiarpur | Jagraon | Jalandhar | Jugial | Kapurthala | Kharar | Kotkapura | Ludhiana | Malaut | Malerkotla | Mansa | Moga | Muktasar | Nabha | Nakodar | Nangal | Nawanshahar | Nawanshahr | Pathankot | Patiala | Patti | Phagwara | Phillaur | Phulmandi | Quadian | Rajpura | Raman | Rayya | Ropar | Rupnagar | Samana | Samrala | Sangrur | Sardulgarh | Sarhind | SAS Nagar | Sultanpur Lodhi | Sunam | Tanda Urmar | Tarn Taran | Zira ";
    s_a[29] =
      " Abu Road | Ahore | Ajmer | Aklera | Alwar | Amber | Amet | Anupgarh | Asind | Aspur | Atru | Bagidora | Bali | Bamanwas | Banera | Bansur | Banswara | Baran | Bari | Barisadri | Barmer | Baseri | Bassi | Baswa | Bayana | Beawar | Begun | Behror | Bhadra | Bharatpur | Bhilwara | Bhim | Bhinmal | Bikaner | Bilara | Bundi | Chhabra | Chhipaborad | Chirawa | Chittorgarh | Chohtan | Churu | Dantaramgarh | Dausa | Deedwana | Deeg | Degana | Deogarh | Deoli | Desuri | Dhariawad | Dholpur | Digod | Dudu | Dungarpur | Dungla | Fatehpur | Gangapur | Gangdhar | Gerhi | Ghatol | Girwa | Gogunda | Hanumangarh | Hindaun | Hindoli | Hurda | Jahazpur | Jaipur | Jaisalmer | Jalore | Jhalawar | Jhunjhunu | Jodhpur | Kaman | Kapasan | Karauli | Kekri | Keshoraipatan | Khandar | Kherwara | Khetri | Kishanganj | Kishangarh | Kishangarhbas | Kolayat | Kota | Kotputli | Kotra | Kotri | Kumbalgarh | Kushalgarh | Ladnun | Ladpura | Lalsot | Laxmangarh | Lunkaransar | Mahuwa | Malpura | Malvi | Mandal | Mandalgarh | Mandawar | Mangrol | Marwar-Jn | Merta | Nadbai | Nagaur | Nainwa | Nasirabad | Nathdwara | Nawa | Neem Ka Thana | Newai | Nimbahera | Nohar | Nokha | Onli | Osian | Pachpadara | Pachpahar | Padampur | Pali | Parbatsar | Phagi | Phalodi | Pilani | Pindwara | Pipalda | Pirawa | Pokaran | Pratapgarh | Raipur | Raisinghnagar | Rajgarh | Rajsamand | Ramganj Mandi | Ramgarh | Rashmi | Ratangarh | Reodar | Rupbas | Sadulshahar | Sagwara | Sahabad | Salumber | Sanchore | Sangaria | Sangod | Sapotra | Sarada | Sardarshahar | Sarwar | Sawai Madhopur | Shahapura | Sheo | Sheoganj | Shergarh | Sikar | Sirohi | Siwana | Sojat | Sri Dungargarh | Sri Ganganagar | Sri Karanpur | Sri Madhopur | Sujangarh | Taranagar | Thanaghazi | Tibbi | Tijara | Todaraisingh | Tonk | Udaipur | Udaipurwati | Uniayara | Vallabhnagar | Viratnagar ";
    s_a[30] =
      " Barmiak | Be | Bhurtuk | Chhubakha | Chidam | Chubha | Chumikteng | Dentam | Dikchu | Dzongri | Gangtok | Gauzing | Gyalshing | Hema | Kerung | Lachen | Lachung | Lema | Lingtam | Lungthu | Mangan | Namchi | Namthang | Nanga | Nantang | Naya Bazar | Padamachen | Pakhyong | Pemayangtse | Phensang | Rangli | Rinchingpong | Sakyong | Samdong | Singtam | Siniolchu | Sombari | Soreng | Sosing | Tekhug | Temi | Tsetang | Tsomgo | Tumlong | Yangang | Yumtang ";
    s_a[31] =
      " Ambasamudram | Anamali | Arakandanallur | Arantangi | Aravakurichi | Ariyalur | Arkonam | Arni | Aruppukottai | Attur | Avanashi | Batlagundu | Bhavani | Chengalpattu | Chengam | Chennai | Chidambaram | Chingleput | Coimbatore | Courtallam | Cuddalore | Cumbum | Denkanikoitah | Devakottai | Dharampuram | Dharmapuri | Dindigul | Erode | Gingee | Gobichettipalayam | Gudalur | Gudiyatham | Harur | Hosur | Jayamkondan | Kallkurichi | Kanchipuram | Kangayam | Kanyakumari | Karaikal | Karaikudi | Karur | Keeranur | Kodaikanal | Kodumudi | Kotagiri | Kovilpatti | Krishnagiri | Kulithalai | Kumbakonam | Kuzhithurai | Madurai | Madurantgam | Manamadurai | Manaparai | Mannargudi | Mayiladuthurai | Mayiladutjurai | Mettupalayam | Metturdam | Mudukulathur | Mulanur | Musiri | Nagapattinam | Nagarcoil | Namakkal | Nanguneri | Natham | Neyveli | Nilgiris | Oddanchatram | Omalpur | Ootacamund | Ooty | Orathanad | Palacode | Palani | Palladum | Papanasam | Paramakudi | Pattukottai | Perambalur | Perundurai | Pollachi | Polur | Pondicherry | Ponnamaravathi | Ponneri | Pudukkottai | Rajapalayam | Ramanathapuram | Rameshwaram | Ranipet | Rasipuram | Salem | Sankagiri | Sankaran | Sathiyamangalam | Sivaganga | Sivakasi | Sriperumpudur | Srivaikundam | Tenkasi | Thanjavur | Theni | Thirumanglam | Thiruraipoondi | Thoothukudi | Thuraiyure | Tindivanam | Tiruchendur | Tiruchengode | Tiruchirappalli | Tirunelvelli | Tirupathur | Tirupur | Tiruttani | Tiruvallur | Tiruvannamalai | Tiruvarur | Tiruvellore | Tiruvettipuram | Trichy | Tuticorin | Udumalpet | Ulundurpet | Usiliampatti | Uthangarai | Valapady | Valliyoor | Vaniyambadi | Vedasandur | Vellore | Velur | Vilathikulam | Villupuram | Virudhachalam | Virudhunagar | Wandiwash | Yercaud ";
    s_a[32] =
      " Adilabad | Hyderabad | Jagtial | Karimnagar | Khammam | Mahabubnagar | Mancherial | Miryalaguda | Nalgonda | Nizamabad | Ramagundam | Siddipet | Suryapet | Warangal";
    s_a[33] =
      " Agartala | Ambasa | Bampurbari | Belonia | Dhalai | Dharam Nagar | Kailashahar | Kamal Krishnabari | Khopaiyapara | Khowai | Phuldungsei | Radha Kishore Pur | Tripura ";
    s_a[34] =
      " Achhnera | Agra | Akbarpur | Aliganj | Aligarh | Allahabad | Ambedkar Nagar | Amethi | Amiliya | Amroha | Anola | Atrauli | Auraiya | Azamgarh | Baberu | Badaun | Baghpat | Bagpat | Baheri | Bahraich | Ballia | Balrampur | Banda | Bansdeeh | Bansgaon | Bansi | Barabanki | Bareilly | Basti | Bhadohi | Bharthana | Bharwari | Bhogaon | Bhognipur | Bidhuna | Bijnore | Bikapur | Bilari | Bilgram | Bilhaur | Bindki | Bisalpur | Bisauli | Biswan | Budaun | Budhana | Bulandshahar | Bulandshahr | Capianganj | Chakia | Chandauli | Charkhari | Chhata | Chhibramau | Chirgaon | Chitrakoot | Chunur | Dadri | Dalmau | Dataganj | Debai | Deoband | Deoria | Derapur | Dhampur | Domariyaganj | Dudhi | Etah | Etawah | Faizabad | Farrukhabad | Fatehpur | Firozabad | Garauth | Garhmukteshwar | Gautam Buddha Nagar | Ghatampur | Ghaziabad | Ghazipur | Ghosi | Gonda | Gorakhpur | Gunnaur | Haidergarh | Hamirpur | Hapur | Hardoi | Harraiya | Hasanganj | Hasanpur | Hathras | Jalalabad | Jalaun | Jalesar | Jansath | Jarar | Jasrana | Jaunpur | Jhansi | Jyotiba Phule Nagar | Kadipur | Kaimganj | Kairana | Kaisarganj | Kalpi | Kannauj | Kanpur | Karchhana | Karhal | Karvi | Kasganj | Kaushambi | Kerakat | Khaga | Khair | Khalilabad | Kheri | Konch | Kumaon | Kunda | Kushinagar | Lalganj | Lalitpur | Lucknow | Machlishahar | Maharajganj | Mahoba | Mainpuri | Malihabad | Mariyahu | Math | Mathura | Mau | Maudaha | Maunathbhanjan | Mauranipur | Mawana | Meerut | Mehraun | Meja | Mirzapur | Misrikh | Modinagar | Mohamdabad | Mohamdi | Moradabad | Musafirkhana | Muzaffarnagar | Nagina | Najibabad | Nakur | Nanpara | Naraini | Naugarh | Nawabganj | Nighasan | Noida | Orai | Padrauna | Pahasu | Patti | Pharenda | Phoolpur | Phulpur | Pilibhit | Pitamberpur | Powayan | Pratapgarh | Puranpur | Purwa | Raibareli | Rampur | Ramsanehi Ghat | Rasara | Rath | Robertsganj | Sadabad | Safipur | Sagri | Saharanpur | Sahaswan | Sahjahanpur | Saidpur | Salempur | Salon | Sambhal | Sandila | Sant Kabir Nagar | Sant Ravidas Nagar | Sardhana | Shahabad | Shahganj | Shahjahanpur | Shikohabad | Shravasti | Siddharthnagar | Sidhauli | Sikandra Rao | Sikandrabad | Sitapur | Siyana | Sonbhadra | Soraon | Sultanpur | Tanda | Tarabganj | Tilhar | Unnao | Utraula | Varanasi | Zamania ";
    s_a[35] =
      " Almora | Bageshwar | Bhatwari | Chakrata | Chamoli | Champawat | Dehradun | Deoprayag | Dharchula | Dunda | Haldwani | Haridwar | Joshimath | Karan Prayag | Kashipur | Khatima | Kichha | Lansdown | Munsiari | Mussoorie | Nainital | Pantnagar | Partapnagar | Pauri Garhwal | Pithoragarh | Purola | Rajgarh | Ranikhet | Roorkee | Rudraprayag | Tehri Garhwal | Udham Singh Nagar | Ukhimath | Uttarkashi ";
    s_a[36] =
      " Adra | Alipurduar | Amlagora | Arambagh | Asansol | Balurghat | Bankura | Bardhaman | Basirhat | Berhampur | Bethuadahari | Birbhum | Birpara | Bishanpur | Bolpur | Bongoan | Bulbulchandi | Burdwan | Calcutta | Canning | Champadanga | Contai | Cooch Behar | Daimond Harbour | Dalkhola | Dantan | Darjeeling | Dhaniakhali | Dhuliyan | Dinajpur | Dinhata | Durgapur | Gangajalghati | Gangarampur | Ghatal | Guskara | Habra | Haldia | Harirampur | Harishchandrapur | Hooghly | Howrah | Islampur | Jagatballavpur | Jalpaiguri | Jhalda | Jhargram | Kakdwip | Kalchini | Kalimpong | Kalna | Kandi | Karimpur | Katwa | Kharagpur | Khatra | Krishnanagar | Mal Bazar | Malda | Manbazar | Mathabhanga | Medinipur | Mekhliganj | Mirzapur | Murshidabad | Nadia | Nagarakata | Nalhati | Nayagarh | Parganas | Purulia | Raiganj | Rampur Hat | Ranaghat | Seharabazar | Siliguri | Suri | Takipur | Tamluk";
  }
  print_state(state_id) {
    // given the id of the <select> tag as function argument, it inserts <option> tags
    console.log(this.state_arr);
    var option_str = document.getElementById(state_id);
    option_str.length = 0;
    option_str.options[0] = new Option("Select State", "");
    option_str.selectedIndex = 0;
    for (var i = 0; i < this.state_arr.length; i++) {
      option_str.options[option_str.length] = new Option(
        this.state_arr[i],
        this.state_arr[i]
      );
    }
  }

  print_city(e) {
    var city_index = e.target.selectedIndex;
    console.log(e.target, s_a);
    var option_str = document.getElementById("state");
    option_str.length = 0; // Fixed by Julian Woods
    option_str.options[0] = new Option("Select City", "");
    option_str.selectedIndex = 0;
    var city_arr = s_a[city_index].split("|");
    for (var i = 0; i < city_arr.length; i++) {
      option_str.options[option_str.length] = new Option(
        city_arr[i],
        city_arr[i]
      );
    }
  }
  componentDidMount() {
      this.print_state('sts');

      window.addEventListener("load", function () {
          const form = document.getElementById('my-form');
          form.addEventListener("submit", function (e) {
              e.preventDefault();
              const data = new FormData(form);
              const action = e.target.action;
              fetch(action, {
                  method: 'POST',
                  body: data,
              })
                  .then(() => {
                      document.getElementById("bod").innerHTML = "<h4>Thank you for your time. Your response has been submitted.</h4>";
                  })
          });
      });

  }
  render() {
    return (
      <>
        {" "}
        <section className="wrapper" id="formSec">
          <div className="formDiv">
            {/* <h2 className="subtitle" data-aos="fade-up">
              CAP Registration is Closed
            </h2> */}
            <div className="content" id="bod">
              <form
                className="gform"
                method="POST"
                data-email="anishbanerjee2002@gmail.com"
                id="my-form"
                action="https://script.google.com/macros/s/AKfycbzCApj7aEryEEFtWdtrbSVTZ4SkwiU-KVsMwPJ8pNELkpbHGY4ttE8oL301fvL8-TFT8A/exec"
              >
                <br />
                <br />
                <br />
                <div class="row">
                  <fieldset class="col-md-6">
                    <div class="container">
                      <label htmlFor="Name" data-aos="fade-up">
                        Your Name*:
                      </label>
                      <br />
                      <input
                        type="text"
                        id="Name"
                        name="Name"
                        data-aos="fade-up"
                        required
                      />
                    </div>
                  </fieldset>
                  <fieldset class="col-md-6">
                    <div class="container">
                      <label htmlFor="Mobile" data-aos="fade-up">
                        Contact Number(WhatsApp)*:
                      </label>
                      <br />
                      <input
                        type="text"
                        id="Mobile"
                        name="Mobile"
                        data-aos="fade-up"
                        pattern="[\s]{0,}[+0-9]{10,}[\s]{0,}"
                        required
                      />
                    </div>
                  </fieldset>
                </div>
                <div class="row">
                  <fieldset className="pure-group" class="col-md-6">
                    <div class="container">
                      <label htmlFor="email" data-aos="fade-up">
                        E-mail ID*:
                      </label>
                      <br />
                      <input
                        type="text"
                        id="Email"
                        name="Email"
                        pattern="[\s]{0,}[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}[\s]{0,}$"
                        data-aos="fade-up"
                        required
                      />
                    </div>
                  </fieldset>
                  <fieldset className="pure-group" class="col-md-6">
                    <div class="container">
                      <label htmlFor="State" data-aos="fade-up">
                        College State*:
                      </label>
                      <br />
                      <select
                        // onchange="print_city('state', this.selectedIndex);"
                        onChange={this.print_city}
                        id="sts"
                        name="stt"
                        required
                      />
                    </div>
                  </fieldset>
                </div>
                <div class="row">
                  <fieldset className="pure-group" class="col-md-6">
                    <div class="container">
                      <label htmlFor="City" data-aos="fade-up">
                        College City*:
                      </label>
                      <br />
                      <select id="state" required name="City" />
                    </div>
                  </fieldset>
                  <fieldset className="pure-group" class="col-md-6">
                    <div class="container">
                      <label htmlFor="College" data-aos="fade-up">
                        College Name*:
                      </label>
                      <br />
                      <input name="college name" list="college name" required />
                      <datalist name="college name" id="college name">
                        <option disabled="" selected="" value="">
                          {" "}
                          -- select an option --{" "}
                        </option>
                        <option>Other</option>
                        <option>
                          A Radiant Institute of Management and Technology -
                          [ARIMT], Meerut
                        </option>
                        <option>ABES Business School, Ghaziabad</option>
                        <option>ABES Engineering College, Ghaziabad</option>
                        <option>
                          ABES Institute of Technology - [ABESIT], Ghaziabad
                        </option>
                        <option>ABESIT College of Pharmacy, Ghaziabad</option>
                        <option>ABSS Institute of Technology, Meerut</option>
                        <option>ACCMAN Business School, Noida</option>
                        <option>
                          AIHM Institute of Tourism &amp; Hotel Management -
                          [AIHM], Greater Noida
                        </option>
                        <option>
                          AIHM Institute of tourism and hotel management
                          -[AIHM], New Delhi
                        </option>
                        <option>
                          AJK Mass Communication Research Centre, New Delhi
                        </option>
                        <option>
                          AKB Institute of Finance and Management - [AKBIFM],
                          Faridabad
                        </option>
                        <option>
                          AKS Institute of Management Excellence - [AKSIME],
                          Noida
                        </option>
                        <option>AND Academy, New Delhi</option>
                        <option>
                          APS College of Education and Technology, Meerut
                        </option>
                        <option>
                          ATM Global Business School - [ATM GBS], New Delhi
                        </option>
                        <option>ATM Global Business School, Faridabad</option>
                        <option>ATMS Group of Institutions, Hapur</option>
                        <option>Aakashline Institute, New Delhi</option>
                        <option>Aamna Law College - [ALC], Ghaziabad</option>
                        <option>
                          Abhi Institute of Hotel Management- [AIHM], New Delhi
                        </option>
                        <option>
                          Academy of Applied Arts South Campus - [AOAA], New
                          Delhi
                        </option>
                        <option>
                          Academy of Event Planning - [AEP], New Delhi
                        </option>
                        <option>
                          Academy of Hospital Administration - [AHA], Noida
                        </option>
                        <option>
                          Academy of Scientific and Innovative Research -
                          [AcSIR], Ghaziabad
                        </option>
                        <option>
                          Academy of Sports Sciences Research and Management -
                          [ASSRM], New Delhi
                        </option>
                        <option>
                          Accman Institute of Management - [ACCMANIM], Greater
                          Noida
                        </option>
                        <option>
                          Accurate College of Pharmacy, Greater Noida
                        </option>
                        <option>
                          Accurate Institute of Advanced Management - [AIAM],
                          Greater Noida
                        </option>
                        <option>
                          Accurate Institute of Architecture and Planning -
                          [AIAP], Greater Noida
                        </option>
                        <option>
                          Accurate Institute of Management and Technology -
                          [AIMT], Greater Noida
                        </option>
                        <option>
                          Acharya Narendra Dev College - [ANDC], New Delhi
                        </option>
                        <option>
                          Action For Autism National Centre for Autism - [AFA],
                          New Delhi
                        </option>
                        <option>
                          Adharshila College of Education - [ACE], Meerut
                        </option>
                        <option>
                          Adhunik College of Engineering - [ACE], Ghaziabad
                        </option>
                        <option>
                          Adhunik Institute of Education and Research-[AIER],
                          Ghaziabad
                        </option>
                        <option>
                          Adhunik Institute of Productivity Management &amp;
                          Research - [AIPMR], Ghaziabad
                        </option>
                        <option>Aditi Mahavidyalaya - [AMV], New Delhi</option>
                        <option>
                          Aditya College of Pharmacy and Science, New Delhi
                        </option>
                        <option>
                          Aditya Institute of Technology - [AIT], New Delhi
                        </option>
                        <option>
                          Advance Institute of Management - [AIM], Ghaziabad
                        </option>
                        <option>
                          Advanced College of Technology and Management -
                          [ACTM], Palwal
                        </option>
                        <option>
                          Advanced Institute of Education - [AIE], Palwal
                        </option>
                        <option>
                          Advanced Institute of Management - [AIM], New Delhi
                        </option>
                        <option>
                          Advanced Institute of Pharmacy - [AIP], Palwal
                        </option>
                        <option>
                          Advanced Institute of Technology Management - [AITM],
                          Palwal
                        </option>
                        <option>
                          Aggarwal College Ballabgarh - [ACB], Faridabad
                        </option>
                        <option>
                          Aggarwal College Wing III Coed &amp; Self Finance,
                          Rohtak
                        </option>
                        <option>
                          Aggarwal Junior College Wing II, Faridabad
                        </option>
                        <option>
                          Ahilya Bai College of Nursing, New Delhi
                        </option>
                        <option>Airborne Academy, New Delhi</option>
                        <option>
                          Airrath Institute Of Education And Aviation Training
                          Pvt Ltd, New Delhi
                        </option>
                        <option>
                          Ajay Kumar Garg Engineering College - [AKGEC],
                          Ghaziabad
                        </option>
                        <option>
                          Ajay Kumar Garg Institute of Management - [AKGIM],
                          Ghaziabad
                        </option>
                        <option>Akash College of Education, Jind</option>
                        <option>
                          Al-Ameen Institute of Information Technology, New
                          Delhi
                        </option>
                        <option>Al-Falah university - [AFU], Faridabad</option>
                        <option>
                          All India Institute of Medical Sciences - [AIIMS], New
                          Delhi
                        </option>
                        <option>
                          All India Jat Heroes Memorial College, Rohtak
                        </option>
                        <option>
                          All India Management Association - [AIMA], New Delhi
                        </option>
                        <option>
                          Allama Iqbal Unani Medical College, Muzaffarnagar
                        </option>
                        <option>
                          Alwar Institute of Engineering and Technology -
                          [AIET], Alwar
                        </option>
                        <option>Alwar Management Studies, Alwar</option>
                        <option>Alwar Pharmacy College, Alwar</option>
                        <option>
                          Amar Jyoti Institute of Physiotherapy, New Delhi
                        </option>
                        <option>
                          Amar Jyoti Rehabilitation and Research Centre, New
                          Delhi
                        </option>
                        <option>
                          Amazon Institute of Hotel Management - [AIHM], Noida
                        </option>
                        <option>
                          Ambedkar Institute of Technology - [AIT], New Delhi
                        </option>
                        <option>
                          Ambedkar University Delhi - [AUD], New Delhi
                        </option>
                        <option>
                          Ambrish Sharma College of Education and Technology,
                          Meerut
                        </option>
                        <option>
                          American Academy of Financial Management - [AAFM], New
                          Delhi
                        </option>
                        <option>
                          Amity Business School - [ABSM] Manesar, Gurgaon
                        </option>
                        <option>Amity Business School - [ABS], Noida</option>
                        <option>
                          Amity College of Commerce &amp; Finance - [ACCF],
                          Noida
                        </option>
                        <option>
                          Amity Global Business School - [AGBS], Noida
                        </option>
                        <option>
                          Amity Institute of Anthropology - [AIA], Noida
                        </option>
                        <option>
                          Amity Institute of Architecture and Planning, Noida
                        </option>
                        <option>
                          Amity Institute of Behavioural and Applied Science -
                          [AIBAS], Noida
                        </option>
                        <option>
                          Amity Institute of Biotechnology - [AIB], Noida
                        </option>
                        <option>
                          Amity Institute of Competitive Intelligence and
                          Strategic Management - [AICISM], Noida
                        </option>
                        <option>
                          Amity Institute of Disaster Management, Noida
                        </option>
                        <option>
                          Amity Institute of Education - [AIE], New Delhi
                        </option>
                        <option>
                          Amity Institute of English and Business Communication
                          - [AIEBC], Noida
                        </option>
                        <option>
                          Amity Institute of Food Technology - [AIFT], Noida
                        </option>
                        <option>
                          Amity Institute of NGO Management, Noida
                        </option>
                        <option>
                          Amity Institute of Nano Technology - [AINT], Noida
                        </option>
                        <option>
                          Amity Institute of Organic Agriculture - [AIOA], Noida
                        </option>
                        <option>
                          Amity Institute of Pharmacy - [AIP], Noida
                        </option>
                        <option>
                          Amity Institute of Physiotherapy - [AIPT], Noida
                        </option>
                        <option>
                          Amity Institute of Psychology and Allied Sciences -
                          [AIPS], Noida
                        </option>
                        <option>
                          Amity Institute of Telecom Engineering and Management
                          - [AITEM], Noida
                        </option>
                        <option>
                          Amity Institute of Travel and Tourism - [AITT], Noida
                        </option>
                        <option>
                          Amity Institute of Vocational &amp; Industrial
                          Training - [AIVIT], Noida
                        </option>
                        <option>
                          Amity International Business School - [AIBS], Noida
                        </option>
                        <option>Amity Law School - [ALS], New Delhi</option>
                        <option>Amity Law School - [ALS], Noida</option>
                        <option>Amity Nursing College, New Delhi</option>
                        <option>
                          Amity School of Communication - [ASCO], Noida
                        </option>
                        <option>
                          Amity School of Computer Sciences, Noida
                        </option>
                        <option>
                          Amity School of Engineering &amp; Technology - [ASET],
                          New Delhi
                        </option>
                        <option>
                          Amity School of Engineering &amp; Technology - [ASET],
                          Noida
                        </option>
                        <option>
                          Amity School of Fashion Technology - [ASFT], Noida
                        </option>
                        <option>
                          Amity School of Fine Arts - [ASFA], Noida
                        </option>
                        <option>Amity School of Hospitality, New Delhi</option>
                        <option>
                          Amity School of Insurance, Banking and Actuarial
                          Science - [ASIBAS], Noida
                        </option>
                        <option>Amity School of Languages, Noida</option>
                        <option>
                          Amity School of Natural Resources and Sustainable
                          Development - [ASNRSD], Noida
                        </option>
                        <option>
                          Amity School of Performing Arts - [ASPA], Noida
                        </option>
                        <option>
                          Amity School of Physical Studies and Sports Sciences -
                          [ASPSSS], New Delhi
                        </option>
                        <option>Amity School of Rural Management, Noida</option>
                        <option>Amity School of Urban Management, Noida</option>
                        <option>Amity University Online, Noida</option>
                        <option>Amity University, Greater Noida</option>
                        <option>Amity University, Gurgaon</option>
                        <option>Amity University, Noida</option>
                        <option>
                          Amogha Institute of Professional and Technical
                          Education, Ghaziabad
                        </option>
                        <option>
                          Amrapali International Institute of Hotel Management -
                          [AIIHM], Noida
                        </option>
                        <option>
                          Angel Institute of International Hospitality and
                          Management - [AIIHM], Greater Noida
                        </option>
                        <option>
                          Apeejay College of Engineering - [ACES], Sohna
                        </option>
                        <option>
                          Apeejay Institute of Design - [AID], New Delhi
                        </option>
                        <option>
                          Apeejay Institute of Mass Communication - [AIMC], New
                          Delhi
                        </option>
                        <option>
                          Apeejay Institute of Technology - School of Management
                          for Women, Greater Noida
                        </option>
                        <option>
                          Apeejay Institute of Technology, School of
                          Architecture &amp; Planning -[AIT SAP], Greater Noida
                        </option>
                        <option>
                          Apeejay Institute of Technology, School of Computer
                          Science - [AITSCS], Greater Noida
                        </option>
                        <option>
                          Apeejay Institute of Technology, School of Management-
                          [AITSM], Greater Noida
                        </option>
                        <option>
                          Apeejay School of Management - [ASM], New Delhi
                        </option>
                        <option>
                          Apeejay Stya University - [ASU], Gurgaon
                        </option>
                        <option>
                          Apeejay Stya University, School of Engineering &amp;
                          Technology - [SOET], Gurgaon
                        </option>
                        <option>
                          Apeejay Stya University, School of Management Sciences
                          - [SOMS], Gurgaon
                        </option>
                        <option>
                          Apeejay Stya University, School of Pharmaceutical
                          Sciences - [SPS], Gurgaon
                        </option>
                        <option>
                          Apeejay Svran Institute for Bioscience and Clinical
                          Research - [AIBCR], Gurgaon
                        </option>
                        <option>
                          Apeejay Svran International College - [ASIC], Greater
                          Noida
                        </option>
                        <option>
                          Apex Institute of Management and Technology , Karnal
                        </option>
                        <option>Apollo School of Nursing, New Delhi</option>
                        <option>
                          Apparel Training and Design Centre - [ATDC], Gurgaon
                        </option>
                        <option>
                          Applied Research International - [ARI], New Delhi
                        </option>
                        <option>
                          Aravali College of Advanced Studies in Education
                          -[ACASE], Faridabad
                        </option>
                        <option>
                          Aravali College of Engineering and Management -
                          [ACEM], Faridabad
                        </option>
                        <option>Arena Animation, New Delhi</option>
                        <option>
                          Arise Business School - [ABS], New Delhi
                        </option>
                        <option>
                          Army College of Medical Science - [ACMS], New Delhi
                        </option>
                        <option>
                          Army Institute of Education - [AIE], Greater Noida
                        </option>
                        <option>
                          Army Institute of Management and Technology - [AIMT],
                          Greater Noida
                        </option>
                        <option>
                          Arun Jaitley National Institute of Financial
                          Management - [AJNIFM], Faridabad
                        </option>
                        <option>Arya Post Graduate College, Panipat</option>
                        <option>Aryabhatta College, New Delhi</option>
                        <option>
                          Aryan Institute of Technology - [AIT], Ghaziabad
                        </option>
                        <option>Aryavart College of Education, Jind</option>
                        <option>
                          Ashok Institute of Hospitality and Tourism Management,
                          New Delhi
                        </option>
                        <option>Ashoka University, Sonepat</option>
                        <option>
                          Ashray Institute of Paramedical Sciences, New Delhi
                        </option>
                        <option>
                          Ashtavakra Institute of Rehabilitation Sciences and
                          Research - [AIRSR], New Delhi
                        </option>
                        <option>
                          Asia Pacific Institute of Information Technology -
                          [APIIT], Panipat
                        </option>
                        <option>
                          Asia Pacific Institute of Management - [AIM], New
                          Delhi
                        </option>
                        <option>
                          Asian Academy of Culinary Art, New Delhi
                        </option>
                        <option>
                          Asian Academy of Film &amp; Television- [AAFT], Noida
                        </option>
                        <option>Asian Business School - [ABS], Noida</option>
                        <option>
                          Asian Institute of Hospitality &amp; Tourism - [AIHT],
                          Noida
                        </option>
                        <option>
                          Asian Institute of Management and Technology - [AIMT],
                          New Delhi
                        </option>
                        <option>
                          Asian Institute of Medical Sciences, Faridabad
                        </option>
                        <option>Asian Law College - [ALC], Noida</option>
                        <option>Asian School of Business - [ASB], Noida</option>
                        <option>
                          Aster College of Education, Greater Noida
                        </option>
                        <option>Astron College of Education, Meerut</option>
                        <option>
                          Atal Bihari Vajpayee Institute of Medical Sciences
                          &amp; Dr. Ram Manohar Lohia Hospital, New Delhi
                        </option>
                        <option>
                          Atal Bihari Vajpayee School of Management and
                          Entrepreneurship -[ABVSME, JNU], New Delhi
                        </option>
                        <option>
                          Atma Ram Sanatan Dharma College - [ARSD], New Delhi
                        </option>
                        <option>Aura Business School, New Delhi</option>
                        <option>Aviakul Aviation Academy, New Delhi</option>
                        <option>
                          Aviationbaba Aero Services Private Limited, New Delhi
                        </option>
                        <option>Avviare Educational Hub - [AEH], Noida</option>
                        <option>
                          Awadh Centre Of Education - [ACE], New Delhi
                        </option>
                        <option>
                          Ayurvedic and Unani Tibbia College, New Delhi
                        </option>
                        <option>
                          B. M. Institute of Engineering and Technology -
                          [BMIET], Sonepat
                        </option>
                        <option>
                          B.P.S. Mahila Vishwavidyalaya, School of Engineering
                          &amp; Sciences - [SES], Sonepat
                        </option>
                        <option>
                          B.S. Anangpuria Educational Institutes - [BSAEI],
                          Faridabad
                        </option>
                        <option>
                          BBDIT College of Pharmacy -[BBDIT], Ghaziabad
                        </option>
                        <option>
                          BBS Institute of Pharmaceutical and Allied Sciences -
                          [BBSIPAS], Greater Noida
                        </option>
                        <option>
                          BDS Institute of Management - [BDSIM], Meerut
                        </option>
                        <option>BIMT Group of Institutions, Meerut</option>
                        <option>
                          BK Institute of Education and Technology - [BKIET],
                          New Delhi
                        </option>
                        <option>BL Academy of Higher Education, Meerut</option>
                        <option>
                          BLS Institute of Management - [BLSIM], Ghaziabad
                        </option>
                        <option>BM College of Education, Gurgaon</option>
                        <option>
                          BM Group of Institutions - [BMGI], Gurgaon
                        </option>
                        <option>BML Munjal University - [BMU], Gurgaon</option>
                        <option>
                          BML Munjal University, School of Engineering And
                          Technology - [SOET], Gurgaon
                        </option>
                        <option>
                          BML Munjal University, School of Law, Gurgaon
                        </option>
                        <option>
                          BML Munjal University, School of Management, Gurgaon
                        </option>
                        <option>
                          BPS Govt. Medical College for Women, Sonepat
                        </option>
                        <option>
                          BPS Institute of Teacher Training and Research,
                          Sonepat
                        </option>
                        <option>
                          BPS Memorial Girls College - [BPSMGC], Sonepat
                        </option>
                        <option>BRM College of Education, Karnal</option>
                        <option>
                          BS Anangpuria Institute of Law - [BSAIL], Faridabad
                        </option>
                        <option>
                          BS Anangpuria Institute of Technology and Management,
                          Faridabad
                        </option>
                        <option>
                          Baba Haridass College of Pharmacy &amp; Technology
                          -[BHCPT], New Delhi
                        </option>
                        <option>
                          Baba MastNath University - [BMU], Rohtak
                        </option>
                        <option>
                          Babu Banarasi Das Institute of Technology - [BBDIT],
                          Ghaziabad
                        </option>
                        <option>
                          Bakson Homoeopathic Medical College and Hospital -
                          [BHMCH], Greater Noida
                        </option>
                        <option>Balaji College of Education, Faridabad</option>
                        <option>
                          Banarsidas Chandiwala Institute of Hotel Management
                          &amp; Catering Technology, New Delhi
                        </option>
                        <option>
                          Banarsidas Chandiwala Institute of Information
                          Technology- [BCIIT], New Delhi
                        </option>
                        <option>
                          Banarsidas Chandiwala Institute of Physiotherapy -
                          [BCIP], New Delhi
                        </option>
                        <option>
                          Banarsidas Chandiwala Institute of Professional
                          Studies - [BCIPS], New Delhi
                        </option>
                        <option>Bansal Institute of Education, Meerut</option>
                        <option>
                          Basanti Devi Degree College, Bulandshahr
                        </option>
                        <option>Bennett University, Greater Noida</option>
                        <option>
                          Bennett University, School of Engineering &amp;
                          Applied Sciences, Greater Noida
                        </option>
                        <option>
                          Bennett University, School of Law, Greater Noida
                        </option>
                        <option>
                          Bennett University, School of Management, Greater
                          Noida
                        </option>
                        <option>
                          Bhabha Institute of Management Science - [BIMS], Alwar
                        </option>
                        <option>
                          Bhagat Phool Singh Mahila Vishwavidyalaya - [BPSMV],
                          Sonepat
                        </option>
                        <option>Bhagini Nivedita College, New Delhi</option>
                        <option>
                          Bhagwan Mahabir Jain Girls College of Education,
                          Rohtak
                        </option>
                        <option>
                          Bhagwan Mahaveer College Of Engineering &amp;
                          Management - [BMCEM], New Delhi
                        </option>
                        <option>
                          Bhagwan Mahaveer School Of Architecture, Sonepat
                        </option>
                        <option>
                          Bhagwan Parshuram College of Education, Panipat
                        </option>
                        <option>
                          Bhagwan Parshuram Institute of Technology - [BPIT],
                          New Delhi
                        </option>
                        <option>
                          Bhagwant Institute of Pharmacy - [BIP], Muzaffarnagar
                        </option>
                        <option>
                          Bhagwant Institute of Technology - [BIT], Ghaziabad
                        </option>
                        <option>
                          Bhagwant Institute of Technology - [BIT],
                          Muzaffarnagar
                        </option>
                        <option>Bhagwati College of Education, Meerut</option>
                        <option>Bhagwati College of Law, Meerut</option>
                        <option>Bhagwati College of Science, Meerut</option>
                        <option>
                          Bhagwati Institute of Technology and Science - [BITS],
                          Ghaziabad
                        </option>
                        <option>
                          Bhai Parmanand Institute of Business Studies -
                          [BPIBS], New Delhi
                        </option>
                        <option>
                          Bhai Surender Kumar Memorial College of Education,
                          Jind
                        </option>
                        <option>
                          Bharat Institute of Technology - [BITS], Sonepat
                        </option>
                        <option>
                          Bharat Institute of Technology - [BIT], Meerut
                        </option>
                        <option>Bharati College - [BC], New Delhi</option>
                        <option>
                          Bharati Vidyapeeth Institute of Management and
                          Research - [BVIMR], New Delhi
                        </option>
                        <option>
                          Bharati Vidyapeeth's College of Engineering - [BVCOE],
                          New Delhi
                        </option>
                        <option>
                          Bharati Vidyapeeth's Institute of Computer
                          Applications and Management - [BVICAM], New Delhi
                        </option>
                        <option>
                          Bharatiya Vidya Bhavan's Sardar Patel College of
                          Communication and Management - [SPCCM], New Delhi
                        </option>
                        <option>
                          Bharatiya Vidya Bhavan's Usha and Lakshmi Mittal
                          Institute of Management - [BULMIM], New Delhi
                        </option>
                        <option>
                          Bharti Institute of Vedic Astrology - [BIVA], New
                          Delhi
                        </option>
                        <option>
                          Bhartiya Teachers Training College - [BTTC], Alwar
                        </option>
                        <option>
                          Bhartiyam College of Education, Faridabad
                        </option>
                        <option>
                          Bhaskaracharya College of Applied Sciences - [BCAS],
                          New Delhi
                        </option>
                        <option>
                          Bhavan’s Leelavati Munshi College of Education -
                          [BLMCE], New Delhi
                        </option>
                        <option>
                          Bioinformatics Institute of India - [BIT], Noida
                        </option>
                        <option>Birender Singh College of Nursing, Jind</option>
                        <option>
                          Birla Institute of Management Technology - [BIMTECH],
                          Greater Noida
                        </option>
                        <option>
                          Birla Institute of Technology - [BIT], Noida
                        </option>
                        <option>
                          Blue Sky Academy of Aviation and Hospitality
                          Management, New Delhi
                        </option>
                        <option>
                          Brahmanand Group of Institution - [BGI], Bulandshahr
                        </option>
                        <option>
                          Brahmanand Institute of Research Technology and
                          Management - [BIRTM], Bulandshahr
                        </option>
                        <option>
                          Brij Mohan Institute of Management and Technology -
                          [BIMT], Gurgaon
                        </option>
                        <option>Budha College of Design, Karnal</option>
                        <option>Budha College of Education, Karnal</option>
                        <option>
                          Budha College of Higher Education, Karnal
                        </option>
                        <option>
                          Budha College of Management - [BCM], Karnal
                        </option>
                        <option>
                          CBS College of Pharmacy and Technology - [CBSCPT],
                          Faridabad
                        </option>
                        <option>CG Mantra Digital Media Academy, Noida</option>
                        <option>
                          CHM Institute of Hotel and Business Management,
                          Ghaziabad
                        </option>
                        <option>
                          CII Institute of Hospitality, ITC Maurya - [CIIIH],
                          New Delhi
                        </option>
                        <option>
                          CII School of Logistics, Amity University, Noida
                        </option>
                        <option>
                          CMRA Government Polytechnic-[CMRAGP], Rohtak
                        </option>
                        <option>
                          Center for Civil Aviation Training - [CCAT], New Delhi
                        </option>
                        <option>
                          Center for Management Technology - [C-MAT], Greater
                          Noida
                        </option>
                        <option>
                          Centre for Development of Advanced Computing - [CDAC],
                          Noida
                        </option>
                        <option>
                          Centre for Distance and Open Learning, Jamia Millia
                          Islamia, New Delhi
                        </option>
                        <option>
                          Ch Charan Singh College of Engineering, Greater Noida
                        </option>
                        <option>
                          Ch Mahendra Singh Degree College, Ghaziabad
                        </option>
                        <option>
                          Ch. Brahm Prakash Ayurved Charak Sansthan, New Delhi
                        </option>
                        <option>
                          Ch. Charan Singh College of Education &amp;
                          Technology, Meerut
                        </option>
                        <option>Ch. P.R.M. College of Education, Jind</option>
                        <option>
                          Chanderprabhu Jain College of Higher Studies &amp;
                          School of Law, New Delhi
                        </option>
                        <option>
                          Charak Ayurvedic Medical College Hospital &amp;
                          Research Center, Meerut
                        </option>
                        <option>
                          Chaudhary Charan Singh University - [CCS], Meerut
                        </option>
                        <option>
                          Chaudhary Mukhtar Singh Government Girls
                          Polytechnic-[CMSGGP], Meerut
                        </option>
                        <option>
                          Chaudhary Partap Singh Memorial College of Education,
                          Gurgaon
                        </option>
                        <option>
                          Chaudhary Ranbir Singh University - [CRSU], Jind
                        </option>
                        <option>
                          Chet Ram Sharma College of Education, Noida
                        </option>
                        <option>
                          Chhatrapati Shahuji Subharti Institute of Technology
                          &amp; Engineering - [SITE], Meerut
                        </option>
                        <option>Chhotu Ram College of Education, Rohtak</option>
                        <option>Chhotu Ram Institute of Law, Rohtak</option>
                        <option>Chhotu Ram Kisan College - [CRKC], Jind</option>
                        <option>Chhotu Ram Polytechnic, Rohtak</option>
                        <option>
                          Chhotu Ram Rural Institute Of Technology - [CRRIT],
                          New Delhi
                        </option>
                        <option>
                          Christ (Deemed to be University) Delhi NCR, Ghaziabad
                        </option>
                        <option>Cliniminds Delhi NCR, Noida</option>
                        <option>
                          Cluster Innovation Centre - [CIC], New Delhi
                        </option>
                        <option>
                          College of Applied Education and Health Sciences -
                          [CAEHS], Meerut
                        </option>
                        <option>
                          College of Engineering and Rural Technology - [CERT],
                          Meerut
                        </option>
                        <option>
                          College of Traffic Management - Institute of Road
                          Traffic Education - [CTM-IRTE], Faridabad
                        </option>
                        <option>
                          College of Vocational Studies - [CVS], New Delhi
                        </option>
                        <option>Comm-it Career Academy, New Delhi</option>
                        <option>Cook and Bake Academy, New Delhi</option>
                        <option>Cosmic Business School, New Delhi</option>
                        <option>Cosmos College of Education, Noida</option>
                        <option>
                          Cradle Institute of Paramedical Sciences - [CIPS], New
                          Delhi
                        </option>
                        <option>
                          D. S. Institute of Technology &amp; Management -
                          [DSITM], Ghaziabad
                        </option>
                        <option>
                          D.R. College of Engineering and Technology - [DRCET],
                          Panipat
                        </option>
                        <option>DAV Centenary College, Faridabad</option>
                        <option>DAV College, Muzaffarnagar</option>
                        <option>
                          DAV Institute of Management - [DAVIM], Faridabad
                        </option>
                        <option>DBM College of Education, Sonepat</option>
                        <option>
                          DIT School of Engineering, Greater Noida
                        </option>
                        <option>
                          DJ College of Dental Sciences and Research, Ghaziabad
                        </option>
                        <option>
                          DJ College of Pharmacy, Modinagar - [DJCOP], Ghaziabad
                        </option>
                        <option>DPG Degree College - [DPGDC], Gurgaon</option>
                        <option>
                          DPG Institute of Technology and Management - [DPGITM],
                          Gurgaon
                        </option>
                        <option>DPG Polytechnic, Gurgaon</option>
                        <option>DPM Institute of Education, Meerut</option>
                        <option>DPMI Vocational Institute, New Delhi</option>
                        <option>DS Group of Institutions, Ghaziabad</option>
                        <option>DVM College of Education, Gurgaon</option>
                        <option>Darsh College of Education, Sonepat</option>
                        <option>
                          Darsh Institute of Engineering and Technology, Sonepat
                        </option>
                        <option>Daulat Ram College - [DRC], New Delhi</option>
                        <option>
                          Dayawanti Memorial College of Education, Gurgaon
                        </option>
                        <option>
                          Deen Bandhu Sir Chotu Ram Government Polytechnic
                          Sampla, Rohtak
                        </option>
                        <option>
                          Deen Dayal College of Management- [DDCM],
                          Muzaffarnagar
                        </option>
                        <option>
                          Deen Dayal Rustagi College of Education, Gurgaon
                        </option>
                        <option>
                          Deen Dayal Rustagi College of Management And
                          Technology - [DDRCMT], Gurgaon
                        </option>
                        <option>
                          Deen Dayal Rustagi College of Pharmacy, Gurgaon
                        </option>
                        <option>Deen Dayal Upadhyaya College, New Delhi</option>
                        <option>
                          Deenbandhu Chhotu Ram University of Science and
                          Technology - [DCRUST], Sonepat
                        </option>
                        <option>
                          Deep Institute of Engineering and Technology, Gurgaon
                        </option>
                        <option>
                          Dehat Vikas College of Pharmacy, Faridabad
                        </option>
                        <option>
                          Dehat Vikas Institute of Education and Technology,
                          Faridabad
                        </option>
                        <option>Delhi College of Art - [DCA], New Delhi</option>
                        <option>
                          Delhi College of Arts and Commerce - [DCAC], New Delhi
                        </option>
                        <option>
                          Delhi College of Technology and Management - [DCTM],
                          Palwal
                        </option>
                        <option>Delhi Engineering College, Faridabad</option>
                        <option>Delhi Film Institute, New Delhi</option>
                        <option>
                          Delhi Global Institute of Management - [DGIM],
                          Faridabad
                        </option>
                        <option>Delhi Guitar School - [DGS], New Delhi</option>
                        <option>
                          Delhi Institute of Advanced Studies - [DIAS], New
                          Delhi
                        </option>
                        <option>
                          Delhi Institute of Engineering and Technology -
                          [DIET], Meerut
                        </option>
                        <option>
                          Delhi Institute of Fashion and Technology - [DIFT],
                          New Delhi
                        </option>
                        <option>
                          Delhi Institute of Heritage Research and Management -
                          [DIHRM], New Delhi
                        </option>
                        <option>
                          Delhi Institute of Hotel Management and Catering
                          Technology - [DIHM&amp;CT], New Delhi
                        </option>
                        <option>
                          Delhi Institute of Management and Technology -
                          [DIMAT], Ghaziabad
                        </option>
                        <option>
                          Delhi Institute of Pharmaceutical Sciences and
                          Research - [DIPSAR], New Delhi
                        </option>
                        <option>
                          Delhi Institute of Rural Development - [DIRD] Poona,
                          New Delhi
                        </option>
                        <option>
                          Delhi Institute of Rural Development - [DIRD], New
                          Delhi
                        </option>
                        <option>
                          Delhi Institute of Technology &amp; Management -
                          [DITM], Sonepat
                        </option>
                        <option>
                          Delhi Institute of Technology Management and Research
                          - [DITMR], Faridabad
                        </option>
                        <option>
                          Delhi Institute of Technology and Paramedical Sciences
                          - [DITPMS], New Delhi
                        </option>
                        <option>
                          Delhi Institute of Tool Engineering - [DITE], New
                          Delhi
                        </option>
                        <option>
                          Delhi Kannada School of Computer Science, New Delhi
                        </option>
                        <option>
                          Delhi Metropolitan Education - [DME], Noida
                        </option>
                        <option>
                          Delhi Pharmaceutical Sciences and Research University
                          - [DPSRU], New Delhi
                        </option>
                        <option>
                          Delhi Public-Private ITI Khora, Ghaziabad
                        </option>
                        <option>
                          Delhi School of Business - VIPS Technical Campus, New
                          Delhi
                        </option>
                        <option>
                          Delhi School of Economics, University of Delhi -
                          [DSE], New Delhi
                        </option>
                        <option>
                          Delhi School of Management, DTU - [DSM], New Delhi
                        </option>
                        <option>
                          Delhi School of Music - [DSM], New Delhi
                        </option>
                        <option>
                          Delhi School of Professional Studies and Research -
                          [DSPSR], New Delhi
                        </option>
                        <option>
                          Delhi Skill and Entrepreneurship University (DSEU),
                          New Delhi
                        </option>
                        <option>
                          Delhi Teacher Training College - [DTTC], New Delhi
                        </option>
                        <option>
                          Delhi Technical Campus - [DTC], Greater Noida
                        </option>
                        <option>
                          Delhi Technological University - [DTU], New Delhi
                        </option>
                        <option>Delhi University - [DU], New Delhi</option>
                        <option>
                          Delhi University, College of Art, New Delhi
                        </option>
                        <option>
                          Department of Business Economics, University of Delhi
                          - [DBE], New Delhi
                        </option>
                        <option>
                          Department of Commerce, University of Delhi, New Delhi
                        </option>
                        <option>
                          Department of Germanic and Romance Studies, University
                          of Delhi, New Delhi
                        </option>
                        <option>
                          Department of Management Studies IIT Delhi - [DMS
                          IITD], New Delhi
                        </option>
                        <option>
                          Department of Management Studies, Netaji Subhas
                          University of Technology - [NSUT], New Delhi
                        </option>
                        <option>
                          Department of Management, Indira Gandhi Delhi
                          Technical University For Women - [IGDTUW], New Delhi
                        </option>
                        <option>
                          Department of Tourism, Hotel, Hospitality and Heritage
                          Studies, JMI - [DTHHHS], New Delhi
                        </option>
                        <option>Deshbandhu College, New Delhi</option>
                        <option>Dev International College, Alwar</option>
                        <option>Deva Nagri College - [DN], Meerut</option>
                        <option>Devnagari Polytechnic, Meerut</option>
                        <option>
                          Dewan College of Education - [DCE], Meerut
                        </option>
                        <option>
                          Dewan Institute of Management Studies - [DIMS], Meerut
                        </option>
                        <option>Dewan Law College - [DLC], Meerut</option>
                        <option>
                          Dewan V.S. Group of Institutions - [DVSGI], Meerut
                        </option>
                        <option>
                          Dewan V.S. Institute of Engineering &amp; Technology -
                          [DVSIET], Meerut
                        </option>
                        <option>
                          Dewan V.S. Institute of Hotel Management &amp;
                          Technology - [DVSIHMT], Meerut
                        </option>
                        <option>
                          Dewan VS Institute of Management - [DVSIM], Meerut
                        </option>
                        <option>Dharma Jyoti Vidya Peeth, Faridabad</option>
                        <option>Dholaplash Polytechnic College, Alwar</option>
                        <option>
                          Directorate of Distance Education, Maharshi Dayanand
                          University - [DDE MDU], Rohtak
                        </option>
                        <option>Disha institute of Vaastu, New Delhi</option>
                        <option>
                          Divya Jyoti Ayurvedic Medical College &amp; Hospital,
                          Modinagar, Ghaziabad
                        </option>
                        <option>
                          Divya Jyoti College of Engineering and Technology -
                          [DJCET], Ghaziabad
                        </option>
                        <option>
                          Don Bosco Technical Institute, New Delhi
                        </option>
                        <option>
                          Doon Valley College of Engineering - [DVCE], Karnal
                        </option>
                        <option>
                          Doon Valley Institute of Engineering and Technology -
                          [DIET], Karnal
                        </option>
                        <option>
                          Doon Valley Institute of Pharmacy and Medicine -
                          [DVIPM], Karnal
                        </option>
                        <option>
                          Dr Shadi Lal College of Education, Meerut
                        </option>
                        <option>
                          Dr. Akhilesh Das Gupta Institute of Technology &amp;
                          Management - [ADGITM], New Delhi
                        </option>
                        <option>
                          Dr. B. R. Ambedkar Center for Biomedical Research -
                          [ACBR], New Delhi
                        </option>
                        <option>
                          Dr. B.R. Ambedkar National Law University -[DBRANLU],
                          Sonepat
                        </option>
                        <option>
                          Dr. B.R. Sur Homoeopathic Medical College, Hospital
                          and Research Centre, New Delhi
                        </option>
                        <option>
                          Dr. Baba Saheb Ambedkar Medical College &amp; Hospital
                          - [BSAMCH], New Delhi
                        </option>
                        <option>
                          Dr. Bhim Rao Ambedkar College, New Delhi
                        </option>
                        <option>
                          Dr. MPS Memorial College of Hotel Management -
                          [DMPSMCHM], New Delhi
                        </option>
                        <option>
                          Dr. Ram Manohar Lohia College of Pharmacy -
                          [Dr.RMLCP], Ghaziabad
                        </option>
                        <option>
                          Dreamzone School of Creative Studies, New Delhi
                        </option>
                        <option>
                          Dronacharya College of Engineering - [DCE], Gurgaon
                        </option>
                        <option>Dronacharya Government College, Gurgaon</option>
                        <option>
                          Dronacharya Group of Institutions - [DGI], Greater
                          Noida
                        </option>
                        <option>
                          Ducat Institute Of Professional Studies, Noida
                        </option>
                        <option>
                          Durga Prasad Baljeet Singh Post Graduate College,
                          Bulandshahr
                        </option>
                        <option>Dyal Singh College - [DSC], New Delhi</option>
                        <option>Dyal Singh Evening College, New Delhi</option>
                        <option>Dyal Singh P.G. College, Karnal</option>
                        <option>EMPI Business School, New Delhi</option>
                        <option>
                          ESIC Dental College and Hospital, New Delhi
                        </option>
                        <option>ESIC Medical College, Faridabad</option>
                        <option>
                          Echelon Institute of Technology, Faridabad
                        </option>
                        <option>
                          Editworks School of Mass Communication, Noida
                        </option>
                        <option>Edu Brain Academy, New Delhi</option>
                        <option>
                          Education Institute of Management &amp; Engineering
                          studies - [EIMES], New Delhi
                        </option>
                        <option>Exterior Interior Ltd., New Delhi</option>
                        <option>
                          FHRAI - Institute of Hospitality Management, Greater
                          Noida
                        </option>
                        <option>
                          FMG Group of Institutions- [FMG], Greater Noida
                        </option>
                        <option>FMS Delhi, New Delhi</option>
                        <option>
                          FORE School of Management - [FSM], New Delhi
                        </option>
                        <option>
                          Faculty of Law Jamia Millia Islamia University, New
                          Delhi
                        </option>
                        <option>
                          Faculty of Law, University of Delhi, New Delhi
                        </option>
                        <option>
                          Faculty of Management Studies, Manav Rachna
                          International Institute of Research and Studies,
                          Faridabad
                        </option>
                        <option>
                          Faculty of Medical Sciences, University of Delhi, New
                          Delhi
                        </option>
                        <option>
                          Fairfield Institute of Management and Technology -
                          [FIMT], New Delhi
                        </option>
                        <option>
                          Faridabad Institute of Management Studies - [FIMS],
                          Faridabad
                        </option>
                        <option>
                          Federal Institute Of Hotel Management - [FIHM], Noida
                        </option>
                        <option>
                          First India School of Business - [FISB], Gurgaon
                        </option>
                        <option>
                          Florence Nightingale College of Nursing, New Delhi
                        </option>
                        <option>
                          Footwear Design &amp; Development Institute - [FDDI],
                          Noida
                        </option>
                        <option>
                          Footwear Design and Development Institute - [FDDI],
                          Rohtak
                        </option>
                        <option>
                          Forte Institute of Technology - [FIT], Meerut
                        </option>
                        <option>
                          Fortune Institute of International Business - [FIIB],
                          New Delhi
                        </option>
                        <option>Fostiima Business School, New Delhi</option>
                        <option>
                          Frankfinn Institute of Air Hostess Training, New Delhi
                        </option>
                        <option>G D Goenka University - [GDGU], Gurgaon</option>
                        <option>
                          G D Goenka University, School of Architecture and
                          Planning - [SAP], Gurgaon
                        </option>
                        <option>
                          G D Goenka University, School of Communication -
                          [SOC], Gurgaon
                        </option>
                        <option>
                          G D Goenka University, School of Education - [SOE],
                          Gurgaon
                        </option>
                        <option>
                          G D Goenka University, School of Engineering - [SOE],
                          Gurgaon
                        </option>
                        <option>
                          G D Goenka University, School of Fashion and Design -
                          [SOFD], Gurgaon
                        </option>
                        <option>
                          G D Goenka University, School of Hospitality - [SoH],
                          Gurgaon
                        </option>
                        <option>
                          G D Goenka University, School of Humanities and Social
                          Science - [SHSS], Gurgaon
                        </option>
                        <option>
                          G D Goenka University, School of Law - [SOL], Gurgaon
                        </option>
                        <option>
                          G D Goenka University, School of Management - [SOM],
                          Gurgaon
                        </option>
                        <option>
                          G D Goenka University, School of Medical and Allied
                          Sciences - [SMAS], Gurgaon
                        </option>
                        <option>
                          G L Bajaj Institute of Technology and Management,
                          Greater Noida
                        </option>
                        <option>
                          G. B. Pant Institute Of Technology - [GBPIT], New
                          Delhi
                        </option>
                        <option>
                          G.B. Pant Govt. Engineering College, New Delhi
                        </option>
                        <option>G.V.M Girls College, Sonepat</option>
                        <option>GD Goenka Healthcare, New Delhi</option>
                        <option>
                          GD Goenka University Campus - powered by Sunstone’s
                          Edge, Gurgaon
                        </option>
                        <option>
                          GD Goenka World Institute - [GDGWI], Gurgaon
                        </option>
                        <option>GDR College of Education, Panipat</option>
                        <option>
                          GL Bajaj Institute of Management and Research -
                          [GLBIMR], Greater Noida
                        </option>
                        <option>GN Group of Institutes, Greater Noida</option>
                        <option>
                          GNIOT Group of Institutions - [GNIOT], Greater Noida
                        </option>
                        <option>
                          GNIOT Institute of Management Studies - [GIMS],
                          Greater Noida
                        </option>
                        <option>GNIT College Of Pharmacy, Greater Noida</option>
                        <option>GS Group, Hapur</option>
                        <option>GVM College of Education, Sonepat</option>
                        <option>GVM College of Pharmacy, Sonepat</option>
                        <option>
                          GVM Institute of Technology and Management, Sonepat
                        </option>
                        <option>
                          Galaxy Institute of Technology and Management -
                          [GIMT], Karnal
                        </option>
                        <option>
                          Galgotias College of Engineering and Technology -
                          [GCET], Greater Noida
                        </option>
                        <option>
                          Galgotias Institute of Management and Technology -
                          [GIMT], Greater Noida
                        </option>
                        <option>
                          Galgotias University - [GU], Greater Noida
                        </option>
                        <option>
                          Galgotias University School of Business - [SOB],
                          Greater Noida
                        </option>
                        <option>
                          Galgotias University, School of Biosciences and
                          Biomedical Engineering - [SBBE], Greater Noida
                        </option>
                        <option>
                          Galgotias University, School of Finance &amp; Commerce
                          - [SOFC], Greater Noida
                        </option>
                        <option>
                          Galgotias University, School of Law - [SOL], Greater
                          Noida
                        </option>
                        <option>
                          Gandhi Polytechnic College - [GPC], Muzaffarnagar
                        </option>
                        <option>
                          Ganesh Educational Institute And Research Centre, New
                          Delhi
                        </option>
                        <option>
                          Ganga Group of Institutions - [GGI], New Delhi
                        </option>
                        <option>Gargi College, New Delhi</option>
                        <option>
                          Gateway College of Architecture and Design - [GCAD],
                          Sonepat
                        </option>
                        <option>Gateway Education, Sonepat</option>
                        <option>
                          Gateway Institute of Engineering and Technology -
                          [GIET], Sonepat
                        </option>
                        <option>
                          Gateway Institute of IT and Management, New Delhi
                        </option>
                        <option>
                          Gateway School of Business - [GSB], Sonepat
                        </option>
                        <option>Gaur Brahman Ayurvedic College, Rohtak</option>
                        <option>Gaur Brahman Degree College, Rohtak</option>
                        <option>
                          Gautam Buddha University - [GBU], Greater Noida
                        </option>
                        <option>
                          Gautam Buddha University, School of Biotechnology,
                          Greater Noida
                        </option>
                        <option>
                          Gautam Buddha University, School of Engineering,
                          Greater Noida
                        </option>
                        <option>
                          Gautam Buddha University, School of Information and
                          Communication Technology, Greater Noida
                        </option>
                        <option>
                          Gautam Buddha University, School of Management,
                          Greater Noida
                        </option>
                        <option>
                          Geeta Arya Girls College of Education, Jind
                        </option>
                        <option>
                          Geeta Engineering College - [GEC], Panipat
                        </option>
                        <option>Geeta Institute of Law - [GIL], Panipat</option>
                        <option>Geeta University, Panipat</option>
                        <option>
                          Gitarattan Institute of Advanced Studies and Training
                          - [GIAST], New Delhi
                        </option>
                        <option>
                          Gitarattan International Business School- [GIBS], New
                          Delhi
                        </option>
                        <option>
                          Global College of Law - [GCL], Ghaziabad
                        </option>
                        <option>
                          Global Educational Institutes, Greater Noida
                        </option>
                        <option>
                          Global Institute Of Information Technology, Greater
                          Noida
                        </option>
                        <option>
                          Global Institute of Intellectual Property - [GIIP],
                          New Delhi
                        </option>
                        <option>
                          Global Institute of Technology - [GIT], Noida
                        </option>
                        <option>
                          Global Institute of Technology and Management -
                          [GITM], Gurgaon
                        </option>
                        <option>
                          Global Risk Management Institute - [GRMI], Gurgaon
                        </option>
                        <option>Global Skill Education, Ghaziabad</option>
                        <option>
                          Gold Field College of Education - [GFCE], Faridabad
                        </option>
                        <option>
                          Goswami Ganesh Dutt Sanatan Dharam PG College -
                          [GGDSD], Palwal
                        </option>
                        <option>Government College For Girls, Gurgaon</option>
                        <option>Government College For Women, Rohtak</option>
                        <option>Government College for Women, Karnal</option>
                        <option>Government College, Gurgaon</option>
                        <option>Government College, Jind</option>
                        <option>Government College, Karnal</option>
                        <option>Government College, Karnal</option>
                        <option>Government Commerce College, Alwar</option>
                        <option>
                          Government Institute of Medical Sciences - [GIMS],
                          Greater Noida
                        </option>
                        <option>
                          Government Polytechnic College - [GPC], Alwar
                        </option>
                        <option>Government Polytechnic College, Alwar</option>
                        <option>
                          Government Polytechnic Education Society - [GPES],
                          Gurgaon
                        </option>
                        <option>Government Polytechnic Uttawar, Palwal</option>
                        <option>
                          Government Polytechnic for Women, Faridabad
                        </option>
                        <option>Government Polytechnic, Ghaziabad</option>
                        <option>Government Polytechnic, Sonepat</option>
                        <option>
                          Government Post Graduate College - [GPDC], Noida
                        </option>
                        <option>Government Postgraduate College, Jind</option>
                        <option>Government college, Panipat</option>
                        <option>Govindam Business School, New Delhi</option>
                        <option>
                          Graduate School of Business And Administration -
                          [GSBA], Greater Noida
                        </option>
                        <option>
                          Great Lakes Institute of Management - [GLIM], Gurgaon
                        </option>
                        <option>Great Lakes Online Learning, Gurgaon</option>
                        <option>Great Learning, Gurgaon</option>
                        <option>
                          Great Mission Teachers Training Institute, New Delhi
                        </option>
                        <option>Greater Noida College, Greater Noida</option>
                        <option>
                          Greater Noida Institute Of Business Management -
                          [GNIBM], Greater Noida
                        </option>
                        <option>
                          Greater Noida Institute Of Technology MBA Institute,
                          Greater Noida
                        </option>
                        <option>
                          Greater Noida Institute of Technology (Engineering
                          Institute), Greater Noida
                        </option>
                        <option>
                          Greater Noida Institute of Technology, IPU - [GNIT],
                          Greater Noida
                        </option>
                        <option>Green Valley College of Education, Jind</option>
                        <option>Green Wood College of Education, Karnal</option>
                        <option>
                          Gulshan Kumar Film &amp; Television Institute of India
                          - [GKFTII], Noida
                        </option>
                        <option>
                          Gurgaon College of Engineering - [GCE], Gurgaon
                        </option>
                        <option>
                          Guru Gobind Singh Indraprastha University - [GGSIPU],
                          New Delhi
                        </option>
                        <option>
                          Guru Gram Business School - [GGBS], Gurgaon
                        </option>
                        <option>
                          Guru Nanak College of Education - [GNCE], New Delhi
                        </option>
                        <option>
                          Guru Nanak Institute of Management - [GNIM], New Delhi
                        </option>
                        <option>Guru Nanak Khalsa College, Karnal</option>
                        <option>
                          Guru Ram Das College of Education - [GRDCE], New Delhi
                        </option>
                        <option>
                          Guru Tegh Bahadur Institute of Technology - [GTBIT],
                          New Delhi
                        </option>
                        <option>
                          Guru Tegh Bahadur Polytechnic - [GTBPI], New Delhi
                        </option>
                        <option>
                          Gurudeva Media and Animation College, New Delhi
                        </option>
                        <option>
                          Gurugram Global College of Pharmacy, Gurgaon
                        </option>
                        <option>Gurugram University, Gurgaon</option>
                        <option>
                          Gurukul Institute of Management and Technology -
                          [GIMT], New Delhi
                        </option>
                        <option>
                          Gyan Bharti College of Education, Karnal
                        </option>
                        <option>
                          Gyan Bharti Institute of Management Studies - [GBIMS],
                          Meerut
                        </option>
                        <option>
                          Gyan Bharti Institute of Technology - [GBIT], Meerut
                        </option>
                        <option>
                          H.R Institute of Science and Technology - [HRIST],
                          Ghaziabad
                        </option>
                        <option>
                          H.R. Group of Institutions - [HRIT], Ghaziabad
                        </option>
                        <option>
                          H.R. Institute of Hotel Management - [HRIHM],
                          Ghaziabad
                        </option>
                        <option>
                          HI-Tech Institute of Engineering and Technology -
                          [HIET], Ghaziabad
                        </option>
                        <option>
                          HIMT College of Pharmacy -[HCP], Greater Noida
                        </option>
                        <option>HLM Business School, Ghaziabad</option>
                        <option>HLM Group of Institutions, Ghaziabad</option>
                        <option>HLM Law College, Ghaziabad</option>
                        <option>
                          HMR Institute of Technology &amp; Management -
                          [HMRITM], New Delhi
                        </option>
                        <option>
                          HR Institute of Engineering and Technology - [HRIET],
                          Ghaziabad
                        </option>
                        <option>
                          HR Institute of Pharmacy - [HRIP], Ghaziabad
                        </option>
                        <option>
                          HR Institute of Professional Studies - [HRIPS],
                          Ghaziabad
                        </option>
                        <option>
                          Hamdard Institute of Medical Sciences and Research -
                          [HIMSR], New Delhi
                        </option>
                        <option>Hansraj College - [HRC], New Delhi</option>
                        <option>Happy Child College of Nursing, Sonepat</option>
                        <option>
                          Harlal Institute of Management and Technology -[HIMT],
                          Greater Noida
                        </option>
                        <option>Haryana College of Education, Jind</option>
                        <option>
                          Herbarium Institute of International Hotel Studies -
                          [HIIHS], New Delhi
                        </option>
                        <option>
                          Heritage Institute of Management &amp; Communication -
                          [HIMCOM], New Delhi
                        </option>
                        <option>Hierank Business School - [HBS], Noida</option>
                        <option>Hillwood Medical School, Bulandshahr</option>
                        <option>Himanshu Art Institute, New Delhi</option>
                        <option>
                          Hindu College of Design, Architecture &amp; Planning -
                          [HICDAP], Sonepat
                        </option>
                        <option>
                          Hindu College of Engineering - [HCE], Sonepat
                        </option>
                        <option>
                          Hindu College of Pharmacy - [HCP], Sonepat
                        </option>
                        <option>Hindu College, New Delhi</option>
                        <option>Hindu College, Sonepat</option>
                        <option>Hindu Girls College - [HGC], Sonepat</option>
                        <option>
                          Hindu Institute of Management - [HIM], Sonepat
                        </option>
                        <option>
                          Hindu Institute of Management and Technology, Rohtak
                        </option>
                        <option>Hindu Kanya Mahavidyala, Jind</option>
                        <option>
                          Holy Family College of Nursing, New Delhi
                        </option>
                        <option>
                          Hope Institute of Hospitality Management - [HIHM], New
                          Delhi
                        </option>
                        <option>
                          Hues &amp; Style Institute of Design and Management -
                          [HSI], Ghaziabad
                        </option>
                        <option>
                          I Business Institute - [IBI], Greater Noida
                        </option>
                        <option>I.T.S Dental College, Ghaziabad</option>
                        <option>
                          I.T.S Institute of Health &amp; Allied Sciences,
                          Ghaziabad
                        </option>
                        <option>
                          IAAN School of Mass Communication, New Delhi
                        </option>
                        <option>IAMR BEd College, Ghaziabad</option>
                        <option>
                          IAMR Group of Institutions - [IAMR], Ghaziabad
                        </option>
                        <option>IAMR Law College, Ghaziabad</option>
                        <option>IB Post Graduate College, Panipat</option>
                        <option>IBMR Business School, Gurgaon</option>
                        <option>ICFAI Business School - [IBS], Gurgaon</option>
                        <option>ICRI - Jagannath University, New Delhi</option>
                        <option>ICRI - Sushant University, Gurgaon</option>
                        <option>
                          IEC -Institute Of Hotel Management - [IIHM], Greater
                          Noida
                        </option>
                        <option>
                          IEC Group of Institutions, Greater Noida
                        </option>
                        <option>IET Biotechnology Institute, Alwar</option>
                        <option>
                          IIF College of Commerce and Management Studies,
                          Greater Noida
                        </option>
                        <option>
                          IILM College of Management Studies, Greater Noida
                        </option>
                        <option>
                          IILM Graduate School of Management - [IILM GSM],
                          Greater Noida
                        </option>
                        <option>
                          IILM Institute for Business &amp; Management
                          [IILM-IBM], Gurgaon
                        </option>
                        <option>
                          IILM Institute for Higher Education, New Delhi
                        </option>
                        <option>
                          IILM Undergraduate Business School - [IILM UBS], New
                          Delhi
                        </option>
                        <option>IILM University, Greater Noida</option>
                        <option>IILM University, Gurgaon</option>
                        <option>IIMR Pharma Business School, New Delhi</option>
                        <option>IIMT College of Education, Meerut</option>
                        <option>
                          IIMT College of Engineering, Greater Noida
                        </option>
                        <option>
                          IIMT College of Hotel Management and Catering
                          Technology, Meerut
                        </option>
                        <option>IIMT College of Law, Greater Noida</option>
                        <option>
                          IIMT College of Management, Greater Noida
                        </option>
                        <option>IIMT College of Medical Science, Meerut</option>
                        <option>IIMT College of Pharmacy, Greater Noida</option>
                        <option>
                          IIMT College of Polytechnic, Greater Noida
                        </option>
                        <option>IIMT Engineering College, Meerut</option>
                        <option>IIMT Group of Colleges, Greater Noida</option>
                        <option>IIMT Group of Colleges, Meerut</option>
                        <option>
                          IIMT Institute of Engineering and Technology, Meerut
                        </option>
                        <option>IIMT Law College, Meerut</option>
                        <option>IIMT Management College, Meerut</option>
                        <option>
                          IIMT School of Management - [ISM], Gurgaon
                        </option>
                        <option>IIMT University - [IIMTU], Meerut</option>
                        <option>IMR Business School, Ghaziabad</option>
                        <option>
                          IMS Design and Innovation Academy - [DIA], Noida
                        </option>
                        <option>
                          IMS Engineering College - [IMSEC], Ghaziabad
                        </option>
                        <option>
                          IMS Ghaziabad (University Courses Campus), Ghaziabad
                        </option>
                        <option>IMS Law College, Noida</option>
                        <option>INJ Business School, Greater Noida</option>
                        <option>INMANTEC Institutions, Ghaziabad</option>
                        <option>IP College of Education, Rohtak</option>
                        <option>IP College, Bulandshahr</option>
                        <option>
                          IP Sports College of Education Research and
                          Technology, Rohtak
                        </option>
                        <option>IPD College, New Delhi</option>
                        <option>IPEM Law Academy, Ghaziabad</option>
                        <option>IPS Eduhub, Meerut</option>
                        <option>IPSE College of Education, Karnal</option>
                        <option>
                          ISIC Institute of Rehabilitation Sciences, New Delhi
                        </option>
                        <option>
                          ISOMES ITA School of Performing Arts, Noida
                        </option>
                        <option>ITERC Group of Institutions, Ghaziabad</option>
                        <option>
                          ITS College of Health &amp; Wellness Sciences, Greater
                          Noida
                        </option>
                        <option>
                          ITS College of Professional Studies, Greater Noida
                        </option>
                        <option>
                          ITS Dental College - [ITSDC], Greater Noida
                        </option>
                        <option>ITS Engineering College, Greater Noida</option>
                        <option>ITS Pharmacy College - [ITS], Ghaziabad</option>
                        <option>IVS School of Design, New Delhi</option>
                        <option>Ideal Group of Institutions, Ghaziabad</option>
                        <option>
                          Ideal Institute of Management and Technology &amp;
                          School of Law - [IIMT], New Delhi
                        </option>
                        <option>
                          Ideal Institute of Technology - [IIT], Ghaziabad
                        </option>
                        <option>
                          Ideal School of Architecture - [ISA], Ghaziabad
                        </option>
                        <option>
                          Impact Institute of Event Management - [IIEM], New
                          Delhi
                        </option>
                        <option>
                          Impact Paramedical and Healthcare Institute - [IPHI],
                          New Delhi
                        </option>
                        <option>
                          Imperial School of Agri Business - [ISAB], Greater
                          Noida
                        </option>
                        <option>
                          Inderprastha Dental College &amp; Hospital, Ghaziabad
                        </option>
                        <option>
                          Inderprastha Engineering College - [IPEC], Ghaziabad
                        </option>
                        <option>
                          India Today Media Institute - [ITMI], Noida
                        </option>
                        <option>
                          Indian Academy of Dramatic Arts - [IADA], New Delhi
                        </option>
                        <option>
                          Indian Agricultural Research Institute - [IARI], New
                          Delhi
                        </option>
                        <option>
                          Indian Agricultural Statistics Research Institute -
                          [IASRI], New Delhi
                        </option>
                        <option>Indian Airhostess Academy, New Delhi</option>
                        <option>
                          Indian Culinary Institute - [ICI], Noida
                        </option>
                        <option>
                          Indian Film and Television Institute - [IFTI], Meerut
                        </option>
                        <option>Indian Hotel Academy-[IHA], New Delhi</option>
                        <option>
                          Indian Institute Of Gems &amp; Jewellery - [IIGJ], New
                          Delhi
                        </option>
                        <option>
                          Indian Institute of Aeronautics - [IIA], New Delhi
                        </option>
                        <option>
                          Indian Institute of Aircraft Engineering -[IIAE], New
                          Delhi
                        </option>
                        <option>
                          Indian Institute of Art and Design - [IIAD], New Delhi
                        </option>
                        <option>
                          Indian Institute of Finance - [IIF], Greater Noida
                        </option>
                        <option>
                          Indian Institute of Financial Planning - [IIFP], New
                          Delhi
                        </option>
                        <option>
                          Indian Institute of Foreign Trade - [IIFT], New Delhi
                        </option>
                        <option>
                          Indian Institute of Information Technology - [IIIT],
                          Sonepat
                        </option>
                        <option>
                          Indian Institute of Learning and Advanced Development
                          - [INLEAD], Gurgaon
                        </option>
                        <option>
                          Indian Institute of Management - [IIM], Rohtak
                        </option>
                        <option>
                          Indian Institute of Management, Lucknow (Noida
                          Campus), Noida
                        </option>
                        <option>
                          Indian Institute of Mass Communication - [IIMC], New
                          Delhi
                        </option>
                        <option>
                          Indian Institute of Public Administration - [IIPA],
                          New Delhi
                        </option>
                        <option>
                          Indian Institute of Public Health - [IIPH], Gurgaon
                        </option>
                        <option>
                          Indian Institute of Retail Training - [IIRT], New
                          Delhi
                        </option>
                        <option>
                          Indian Institute of Tourism and Travel Management -
                          [IITTM], Noida
                        </option>
                        <option>Indian Law Institute - [ILI], New Delhi</option>
                        <option>
                          Indian School of Business Management and
                          Administration - [ISBM], New Delhi
                        </option>
                        <option>
                          Indian School of Business and Finance - [ISBF], New
                          Delhi
                        </option>
                        <option>
                          Indian School of Development Management - [ISDM],
                          Noida
                        </option>
                        <option>
                          Indian School of Hospitality - [ISH], Gurgaon
                        </option>
                        <option>
                          Indian School of Public Relations - [ISPR], New Delhi
                        </option>
                        <option>
                          Indian Statistical Institute - [ISI], New Delhi
                        </option>
                        <option>
                          Indira Gandhi Delhi Technical University For Women
                          -[IGDTUW], New Delhi
                        </option>
                        <option>
                          Indira Gandhi Institute of Physical Education and
                          Sports Sciences - [IGIPESS], New Delhi
                        </option>
                        <option>
                          Indira Gandhi National Open University - [IGNOU], New
                          Delhi
                        </option>
                        <option>
                          Indirapuram Institute of Higher Studies - [IIHS],
                          Ghaziabad
                        </option>
                        <option>
                          Indraprasth Institute of Aeronautics - [IIAG], Gurgaon
                        </option>
                        <option>
                          Indraprasth Institute of Management - [IIMG], Gurgaon
                        </option>
                        <option>
                          Indraprastha Academy Of Science &amp; Engineering,
                          Noida
                        </option>
                        <option>
                          Indraprastha College for Women - [IP], New Delhi
                        </option>
                        <option>
                          Indraprastha Institute of Education and Management,
                          Ghaziabad
                        </option>
                        <option>
                          Indraprastha Institute of Information Technology -
                          [IIITD], New Delhi
                        </option>
                        <option>
                          Indraprastha Institute of Technology and Management -
                          [IITM], New Delhi
                        </option>
                        <option>
                          Indus Business Academy - [IBA], Greater Noida
                        </option>
                        <option>Indus College of Education, Rohtak</option>
                        <option>
                          Indus Institute of Engineering and Technology -
                          [IIET], Jind
                        </option>
                        <option>
                          Indus School of Business Management - [ISBM], Gurgaon
                        </option>
                        <option>
                          Industrial Training Institute Malviya Nagar - [ITI],
                          New Delhi
                        </option>
                        <option>Ingraham Polytechnic, Ghaziabad</option>
                        <option>
                          Innovative College of Pharmacy, Greater Noida
                        </option>
                        <option>
                          Insoft Institute of IT &amp; Management, Noida
                        </option>
                        <option>
                          Institute Of Paramedical Science And Management -
                          [IPSM], New Delhi
                        </option>
                        <option>
                          Institute Of Vocational Studies -[IVS], New Delhi
                        </option>
                        <option>
                          Institute for Media Management and Communication
                          Studies - [IMCS], New Delhi
                        </option>
                        <option>
                          Institute for Studies in Industrial Development, New
                          Delhi
                        </option>
                        <option>
                          Institute of Advanced Management &amp; Research -
                          [IAMR], Ghaziabad
                        </option>
                        <option>
                          Institute of Apparel Management, Gurgaon
                        </option>
                        <option>
                          Institute of Applied Medicines and Research - [IAMR],
                          Ghaziabad
                        </option>
                        <option>Institute of Archaeology, New Delhi</option>
                        <option>
                          Institute of Creative Excellence - [ICE], New Delhi
                        </option>
                        <option>
                          Institute of Dental Studies and Technologies,
                          Ghaziabad
                        </option>
                        <option>
                          Institute of Distance Education, Rashtriya Sanskrit
                          Sansthan - [MSP], New Delhi
                        </option>
                        <option>
                          Institute of Engineering and Technology - [IETR],
                          Alwar
                        </option>
                        <option>
                          Institute of Entrepreneurship - [IOE], New Delhi
                        </option>
                        <option>
                          Institute of Fire Engineering and Safety Management-
                          [NIFS], New Delhi
                        </option>
                        <option>
                          Institute of Good Manufacturing Practices India -
                          [IGMPI], Noida
                        </option>
                        <option>Institute of Home Economics, New Delhi</option>
                        <option>
                          Institute of Hotel Management -[IHM], Faridabad
                        </option>
                        <option>
                          Institute of Hotel Management Catering Technology and
                          Applied Nutrition - [IHM], Meerut
                        </option>
                        <option>
                          Institute of Hotel Management Catering Technology and
                          Applied Nutrition - [IHM], Panipat
                        </option>
                        <option>
                          Institute of Hotel Management, Catering and Nutrition
                          - [IHM], Pusa, New Delhi
                        </option>
                        <option>
                          Institute of Human Behaviour &amp; Allied Sciences -
                          [IHBAS], New Delhi
                        </option>
                        <option>
                          Institute of Information Technology &amp; Management -
                          [IITM], New Delhi
                        </option>
                        <option>
                          Institute of Information Technology and Management -
                          [IITM], Gurgaon
                        </option>
                        <option>
                          Institute of Innovation in Technology and Management -
                          [IITM], New Delhi
                        </option>
                        <option>
                          Institute of Law and Research - [ILR], Faridabad
                        </option>
                        <option>
                          Institute of Liver and Biliary Sciences - [ILBS], New
                          Delhi
                        </option>
                        <option>
                          Institute of Management Education Group of Colleges -
                          [IME], Ghaziabad
                        </option>
                        <option>
                          Institute of Management Studies - [IMS], Ghaziabad
                        </option>
                        <option>
                          Institute of Management Studies - [IMS], Noida
                        </option>
                        <option>
                          Institute of Management Technology - [IMT], Ghaziabad
                        </option>
                        <option>
                          Institute of Management Technology Centre for Distance
                          Learning - [IMT-CDL], Ghaziabad
                        </option>
                        <option>
                          Institute of Management and Research - [IMR],
                          Ghaziabad
                        </option>
                        <option>
                          Institute of Management and Technology - [IMT],
                          Faridabad
                        </option>
                        <option>
                          Institute of Marketing &amp; Management - [IMM], New
                          Delhi
                        </option>
                        <option>
                          Institute of Marketing and Communications India
                          [IMCI], Noida
                        </option>
                        <option>
                          Institute of Para Medical Technology - [IPMT], New
                          Delhi
                        </option>
                        <option>
                          Institute of Productivity and Management - [IPM],
                          Ghaziabad
                        </option>
                        <option>
                          Institute of Productivity and Management - [IPM],
                          Meerut
                        </option>
                        <option>
                          Institute of Professional Excellence and Management -
                          [IPEM], Ghaziabad
                        </option>
                        <option>
                          Institute of Professional Studies - [IPS], Ghaziabad
                        </option>
                        <option>
                          Institute of Professional Studies and Research, New
                          Delhi
                        </option>
                        <option>
                          Institute of Public Health and Hygiene - [IPHH], New
                          Delhi
                        </option>
                        <option>
                          Institute of Technology &amp; Science - [ITS] UG
                          Campus, Ghaziabad
                        </option>
                        <option>
                          Institute of Technology and Management - [ITM], Meerut
                        </option>
                        <option>
                          Institute of Technology and Science - [I.T.S],
                          Ghaziabad
                        </option>
                        <option>
                          Integrated Institute of Technology - [IIT], New Delhi
                        </option>
                        <option>
                          Integrated School of Law - [ISL], Ghaziabad
                        </option>
                        <option>
                          Inter National Institute of Fashion Design - [INIFD],
                          New Delhi
                        </option>
                        <option>
                          International Academy of Designs and Arts - [IADA],
                          Noida
                        </option>
                        <option>
                          International Career Academy - [ICA], New Delhi
                        </option>
                        <option>
                          International Center for Advance Studies and Research
                          - [ICASR], Gurgaon
                        </option>
                        <option>
                          International College of Fashion - [ICF], New Delhi
                        </option>
                        <option>
                          International College of Financial Planning - [ICoFP],
                          New Delhi
                        </option>
                        <option>
                          International Gemological institute - [IGI], New Delhi
                        </option>
                        <option>
                          International Institute of Culinary Arts - [IICA], New
                          Delhi
                        </option>
                        <option>
                          International Institute of Fashion Technology - [IIFT]
                          Naraina, New Delhi
                        </option>
                        <option>
                          International Institute of Fashion Technology -
                          [IIFT], New Delhi
                        </option>
                        <option>
                          International Institute of Fashion Technology -
                          [IIFT], New Delhi
                        </option>
                        <option>
                          International Institute of Health Management Research
                          - [IIHMR], New Delhi
                        </option>
                        <option>
                          International Institute of Hotel Management - [IIHM],
                          New Delhi
                        </option>
                        <option>
                          International Institute of Management Media and I.T. -
                          [IIMMI], New Delhi
                        </option>
                        <option>
                          International Institute of Mass Media - [IIMM], New
                          Delhi
                        </option>
                        <option>
                          International Institute of Technology and Management -
                          [IITM], Sonepat
                        </option>
                        <option>
                          International Institute of Vaidic Culture - [IIVC],
                          New Delhi
                        </option>
                        <option>
                          International Institute of Veterinary Education &amp;
                          Research - [IIVR], Rohtak
                        </option>
                        <option>
                          International Management Centre - [IMC], New Delhi
                        </option>
                        <option>
                          International Management Institute - [IMI], New Delhi
                        </option>
                        <option>
                          International Maritime Institute - [IMI], Greater
                          Noida
                        </option>
                        <option>
                          International Media Institute of India - [IMII], Noida
                        </option>
                        <option>International Polytechnic, New Delhi</option>
                        <option>
                          International School of Astrology, New Delhi
                        </option>
                        <option>
                          International School of Aviation - [ISA], New Delhi
                        </option>
                        <option>
                          International School of Business Studies - [ISBS],
                          Gurgaon
                        </option>
                        <option>
                          International School of Design - [INSD], New Delhi
                        </option>
                        <option>
                          International School of Media and Entertainment
                          Studies - [ISOMES], Noida
                        </option>
                        <option>Ishan Institute of Law, Greater Noida</option>
                        <option>
                          Ishan Institute of Management and Technology - [IIMT],
                          Greater Noida
                        </option>
                        <option>
                          Ishwar Institute of Technology and Research - [IITR],
                          Faridabad
                        </option>
                        <option>
                          Ismail National Mahila P.G College - [INMPGC], Meerut
                        </option>
                        <option>
                          J.C. Bose University Of Science And Technology, YMCA,
                          Faridabad
                        </option>
                        <option>
                          JB Knowledge Park - [JB College], Faridabad
                        </option>
                        <option>
                          JD Institute of Fashion Technology Hauz Khas, New
                          Delhi
                        </option>
                        <option>
                          JD Institute of Fashion Technology Kamla Nagar, New
                          Delhi
                        </option>
                        <option>
                          JD Institute of Fashion Technology Pitampura &amp;
                          Rajouri Garden, New Delhi
                        </option>
                        <option>
                          JIMS Engineering Management Technical Campus-
                          [JEMTEC], Greater Noida
                        </option>
                        <option>JK Business School - [JKBS], Gurgaon</option>
                        <option>
                          JK Institute of Management and Technology - [JKIMT],
                          Karnal
                        </option>
                        <option>JK Institute of Pharmacy, Bulandshahr</option>
                        <option>
                          JK Padampat Singhania Institute of Management and
                          Technology - [JKPS], Gurgaon
                        </option>
                        <option>JKP Polytechnic, Sonepat</option>
                        <option>JMS Group of Institutions, Hapur</option>
                        <option>JP Group of Institutions, Meerut</option>
                        <option>
                          JP Institute of Education and Applied Science -
                          [JPIEAS], Meerut
                        </option>
                        <option>JP Institute of Education, Meerut</option>
                        <option>
                          JP Institute of Engineering and Technology - [JPIET],
                          Meerut
                        </option>
                        <option>
                          JP Institute of Hotel Management &amp; Catering
                          Technology, Meerut
                        </option>
                        <option>
                          JP Institute of Management - [JPIM], Meerut
                        </option>
                        <option>
                          JR Kissan Homoeopathic Medical College and Hospital,
                          Rohtak
                        </option>
                        <option>
                          JRE Group of Institutions - [JRE], Greater Noida
                        </option>
                        <option>
                          JRE School of Management - [JRE-SOM], Greater Noida
                        </option>
                        <option>
                          JRN Institute of Aviation Technology - [JRNIAT], New
                          Delhi
                        </option>
                        <option>
                          JS Institute of Design - [JSID], New Delhi
                        </option>
                        <option>JSM Academy, Meerut</option>
                        <option>
                          JSS Academy of Technical Education - [JSSATE], Noida
                        </option>
                        <option>
                          Jagan Institute of Management Studies - [JIMS] Rohini,
                          New Delhi
                        </option>
                        <option>
                          JaganNath Institute of Management Sciences - [JIMS]
                          Rohini Sec-3, New Delhi
                        </option>
                        <option>
                          Jagannath Institute Of Management Sciences - [JIMS]
                          Vasant Kunj 2, New Delhi
                        </option>
                        <option>
                          Jagannath Institute of Management Sciences - [JIMS],
                          Noida
                        </option>
                        <option>
                          Jagannath International Management School - [JIMS]
                          Kalkaji, New Delhi
                        </option>
                        <option>
                          Jagannath International Management School - [JIMS]
                          Vasant Kunj, New Delhi
                        </option>
                        <option>
                          Jagran Institute of Management and Mass Communication
                          - [JIMMC], Noida
                        </option>
                        <option>
                          Jagriti Institute of Higher Education, Faridabad
                        </option>
                        <option>
                          Jaipuria Institute of Management, Ghaziabad
                        </option>
                        <option>Jaipuria Institute of Management, Noida</option>
                        <option>
                          Jaipuria School of Business - [JSB], Ghaziabad
                        </option>
                        <option>
                          Jamia Hamdard Open and Distance Learning, New Delhi
                        </option>
                        <option>Jamia Hamdard University, New Delhi</option>
                        <option>
                          Jamia Millia Islamia University-[JMI], New Delhi
                        </option>
                        <option>
                          Janhit Group of Institutions, Greater Noida
                        </option>
                        <option>
                          Janki Devi Memorial College - [JDMC], New Delhi
                        </option>
                        <option>Janki Devi Vocational Centre, New Delhi</option>
                        <option>
                          Janta College of Pharmacy - [JCP], Sonepat
                        </option>
                        <option>
                          Jat College of Education - [JCE], Karnal
                        </option>
                        <option>
                          Jawaharlal Nehru University - [JNU], New Delhi
                        </option>
                        <option>
                          Jawaharlal Nehru University, School of Biotechnology-
                          [SBT], New Delhi
                        </option>
                        <option>Jaypee Business School - [JBS], Noida</option>
                        <option>
                          Jaypee Institute of Information Technology University
                          - [JIIT], Noida
                        </option>
                        <option>
                          Jaypee University Anoopshahr, Bulandshahr
                        </option>
                        <option>
                          Jeevan Jyoti Pharmacy and Medical Science - [JJPMS],
                          Palwal
                        </option>
                        <option>
                          Jesus and Mary College - [JMC], New Delhi
                        </option>
                        <option>
                          Jewellery Design and Technology Institute - [JDTI],
                          Noida
                        </option>
                        <option>
                          Jind Institute of Engineering and Technology - [JIET],
                          Jind
                        </option>
                        <option>Jindal Institute of Education, Meerut</option>
                        <option>
                          K.K. Modi International Institute - [KKMII], New Delhi
                        </option>
                        <option>
                          K.S. Jain Institute of Engineering and Technology,
                          Ghaziabad
                        </option>
                        <option>
                          KCC Institute of Legal &amp; Higher Education, Greater
                          Noida
                        </option>
                        <option>
                          KCC Institute of Technology and Management - [KCCITM],
                          Greater Noida
                        </option>
                        <option>
                          KIET Group of Institutions - [KIET], Ghaziabad
                        </option>
                        <option>KIET School Of Pharmacy, Meerut</option>
                        <option>KIET School of Management, Ghaziabad</option>
                        <option>KIIT College of Education, Gurgaon</option>
                        <option>KIIT College of Engineering, Gurgaon</option>
                        <option>KITE Group of Institutions, Meerut</option>
                        <option>KITE Law College, Meerut</option>
                        <option>
                          KITE School of Business Management, Meerut
                        </option>
                        <option>
                          KITE- SCHOOL OF ENGINEERING AND TECHNOLOGY, Meerut
                        </option>
                        <option>
                          KL Mehta Dayanand College for Women, Faridabad
                        </option>
                        <option>KR Mangalam University, Gurgaon</option>
                        <option>
                          KR Mangalam University, School of Engineering and
                          Technology, Gurgaon
                        </option>
                        <option>
                          KR Mangalam University, School of Law, Gurgaon
                        </option>
                        <option>
                          KR Mangalam University, School of Management and
                          Commerce, Gurgaon
                        </option>
                        <option>
                          KR Mangalam University, School of Medical and Allied
                          Sciences, Gurgaon
                        </option>
                        <option>
                          Kailash Institute of Nursing and Paramedical Sciences,
                          Greater Noida
                        </option>
                        <option>Kalindi College, New Delhi</option>
                        <option>Kalka Business School - [KBS], Meerut</option>
                        <option>Kalka Dental College, Meerut</option>
                        <option>
                          Kalka Engineering College - [KEC], Meerut
                        </option>
                        <option>
                          Kalka Group Of Institutions- [KGI], Meerut
                        </option>
                        <option>
                          Kalka Institute for Research &amp; Advanced Studies -
                          [KIRAS], New Delhi
                        </option>
                        <option>
                          Kalka Pharmacy Institute For Advanced Studies, Meerut
                        </option>
                        <option>
                          Kalpana Chawla Government Medical College - [KCGMC],
                          Karnal
                        </option>
                        <option>
                          Kamal Institute of Higher Education &amp; Advance
                          Technology - [KIHEAT], New Delhi
                        </option>
                        <option>Kamala Nehru College - [KNC], New Delhi</option>
                        <option>
                          Kamkus College of Law - [KCL], Ghaziabad
                        </option>
                        <option>
                          Kanya Gurukul College of Education, Jind
                        </option>
                        <option>
                          Karnal Institute of Technology and Management, Karnal
                        </option>
                        <option>
                          Kasturi College of Education - [KCE], Meerut
                        </option>
                        <option>
                          Kasturi Ram College of Higher Education, New Delhi
                        </option>
                        <option>Keshav Mahavidyalaya, New Delhi</option>
                        <option>Khairthal Pharmacy College, Alwar</option>
                        <option>
                          Khatu Shyam Institute of Management and Technology -
                          [KSIMT], New Delhi
                        </option>
                        <option>
                          Kinder Kin College of Education, Panipat
                        </option>
                        <option>Kirori Mal College - [KMC], New Delhi</option>
                        <option>Kisan Post Graduate College, Ghaziabad</option>
                        <option>
                          Kishan Institute of Information Technology - [KIIT],
                          Meerut
                        </option>
                        <option>
                          Krishna Engineering College - [KEC], Ghaziabad
                        </option>
                        <option>
                          Krishna Institute Of Management - [KIM], Meerut
                        </option>
                        <option>
                          Kumari Vidyavati Anand DAV College for Women, Karnal
                        </option>
                        <option>LCRT College of Education, Panipat</option>
                        <option>LISAA School of Design, New Delhi</option>
                        <option>LLRM Medical College, Meerut</option>
                        <option>
                          LNJN National Institute of Criminology and Forensic
                          Science, New Delhi
                        </option>
                        <option>
                          Lady Hardinge Medical College - [LHMC], New Delhi
                        </option>
                        <option>Lady Irwin College, New Delhi</option>
                        <option>
                          Lady Shri Ram College for Women - [LSR], New Delhi
                        </option>
                        <option>Lajpat Rai College - [LRC], Ghaziabad</option>
                        <option>
                          Lakshay College of Education - [LCOE], Panipat
                        </option>
                        <option>
                          Lakshay College of Hotel Management - [LCHM], Panipat
                        </option>
                        <option>Lakshmibai College - [LBC], New Delhi</option>
                        <option>
                          Lakshya Bhartee Institute of International Hotel
                          Management - [LBIIHM], New Delhi
                        </option>
                        <option>
                          Lal Bahadur Shastri College of Education, Gurgaon
                        </option>
                        <option>
                          Lal Bahadur Shastri Institute of Management - [LBSIM],
                          New Delhi
                        </option>
                        <option>Landmark Institute, New Delhi</option>
                        <option>
                          Laxmi Devi Institute of Engineering and Technology -
                          [LIET], Alwar
                        </option>
                        <option>
                          Lingaya's GVKS Institute of Management &amp;
                          Technology - [LGVKS], Faridabad
                        </option>
                        <option>
                          Lingaya's Lalita Devi Institute of Management and
                          Sciences - [LLDIMS], New Delhi
                        </option>
                        <option>Lingaya's Vidyapeeth, Faridabad</option>
                        <option>
                          Lloyd Business School -[LBS], Greater Noida
                        </option>
                        <option>
                          Lloyd Institute of Engineering and Technology -
                          [LIET], Greater Noida
                        </option>
                        <option>
                          Lloyd Institute of Management and Technology, Greater
                          Noida
                        </option>
                        <option>Lloyd Law College, Greater Noida</option>
                        <option>
                          London School of Trends - [LST], New Delhi
                        </option>
                        <option>
                          Lord Krishna College of Education, Gurgaon
                        </option>
                        <option>
                          Lord Krishna College of Engineering - [LKCE],
                          Ghaziabad
                        </option>
                        <option>
                          Lord Shiva College of Education - [LSCE], Rohtak
                        </option>
                        <option>Lords University, Alwar</option>
                        <option>
                          Luxury Connect Business School - [LCBS], Gurgaon
                        </option>
                        <option>MADA Fashion Institute, New Delhi</option>
                        <option>
                          MBS School of Planning and Architecture - [MBS SPA],
                          New Delhi
                        </option>
                        <option>
                          MERI College of Engineering and Technology, New Delhi
                        </option>
                        <option>MLA College of Education, Gurgaon</option>
                        <option>MR DAV College of Education, Rohtak</option>
                        <option>
                          MR DAV Institute of Management Studies, Rohtak
                        </option>
                        <option>MSM Institute of Ayurveda, Sonepat</option>
                        <option>
                          MVN University , School of Engineering &amp;
                          Technology -[SOET], Palwal
                        </option>
                        <option>
                          Maa Omwati Degree College - [MODC], Palwal
                        </option>
                        <option>
                          Maa Omwati Institute of Management and Technology -
                          [MOIMT], Palwal
                        </option>
                        <option>
                          Maa Saraswati Institute Of Engineering &amp;
                          Technology - [MSIET], Rohtak
                        </option>
                        <option>
                          Maa Saraswati Teachers Training Institute - [MSTTI],
                          Gurgaon
                        </option>
                        <option>
                          Madhu Bala Institute of Communication &amp; Electronic
                          Media - [MBICEM], New Delhi
                        </option>
                        <option>Mahalaxmi Group of Institutions, Meerut</option>
                        <option>
                          Maharaja Agarsain Institute of Technology - [MAIT],
                          Ghaziabad
                        </option>
                        <option>
                          Maharaja Agrasen Business School - [MABS], New Delhi
                        </option>
                        <option>
                          Maharaja Agrasen College - [MAC], New Delhi
                        </option>
                        <option>
                          Maharaja Agrasen Institute of Management Studies -
                          [MAIMS], New Delhi
                        </option>
                        <option>
                          Maharaja Agrasen Institute of Technology - [MAIT], New
                          Delhi
                        </option>
                        <option>
                          Maharaja Surajmal Institute - [MSI], New Delhi
                        </option>
                        <option>
                          Maharaja Surajmal Institute of Technology - [MSIT],
                          New Delhi
                        </option>
                        <option>
                          Maharana Pratap Horticultural University - [MHU],
                          Karnal
                        </option>
                        <option>
                          Maharani Kishori Jat Kanya Mahavidyalya, Rohtak
                        </option>
                        <option>
                          Maharishi Kashyap Government Polytechnic - [MKGP],
                          Panipat
                        </option>
                        <option>
                          Maharishi University of Information Technology
                          -[MUIT], Noida
                        </option>
                        <option>
                          Maharshi Dayanand University - [MDU], Rohtak
                        </option>
                        <option>
                          Maharshi Valmiki College of Education - [MVCE], New
                          Delhi
                        </option>
                        <option>
                          Mahatma Gandhi Mission College of Engineering &amp;
                          Technology - [MGMCET], Noida
                        </option>
                        <option>
                          Mahaveer Ayurvedic Medical College &amp; Hospital,
                          Meerut
                        </option>
                        <option>
                          Mahaveer Institute of Engineering &amp; Technology -
                          [MIET], Meerut
                        </option>
                        <option>
                          Mahaveer Swami Institute of Technology - [MSIT],
                          Sonepat
                        </option>
                        <option>Maitreyi College, New Delhi</option>
                        <option>
                          Management Development Institute - [MDI], Gurgaon
                        </option>
                        <option>
                          Management Education &amp; Research Institute -
                          [MERI], New Delhi
                        </option>
                        <option>
                          Manav Bharati Nursery Teachers Training Institute, New
                          Delhi
                        </option>
                        <option>
                          Manav Rachna Dental College - [MRDC], Faridabad
                        </option>
                        <option>
                          Manav Rachna International Institute Of Research And
                          Studies, Faculty of Engineering and Technology -
                          [MRIIRSFET], Faridabad
                        </option>
                        <option>
                          Manav Rachna International Institute of Research and
                          Studies - [MRIIRS], Faridabad
                        </option>
                        <option>
                          Manav Rachna University - [MRU], Faridabad
                        </option>
                        <option>
                          Manav Rachna University, Faculty of Education and
                          Humanities, Faridabad
                        </option>
                        <option>
                          Manav Rachna University, Faculty of Engineering,
                          Faridabad
                        </option>
                        <option>
                          Manav Rachna University, Faculty of Law, Faridabad
                        </option>
                        <option>
                          Manav Rachna University, Faculty of Management and
                          Commerce, Faridabad
                        </option>
                        <option>
                          Mangalmay Institute of Engineering and Technology -
                          [MIET], Greater Noida
                        </option>
                        <option>
                          Mangalmay Institute of Management and Technology -
                          [MIMT], Greater Noida
                        </option>
                        <option>
                          Manyavar Kanshiram Govt Degree College, Ghaziabad
                        </option>
                        <option>
                          Marathwada Institute of Technology - [MIT],
                          Bulandshahr
                        </option>
                        <option>
                          Marathwada Institute of Technology, New Delhi
                        </option>
                        <option>MassCoMedia, Noida</option>
                        <option>
                          Master School of Management - [MSM], Meerut
                        </option>
                        <option>Masters' Union, Gurgaon</option>
                        <option>
                          Mata Sundri College for Women, New Delhi
                        </option>
                        <option>
                          Matrix Institute of Business Management - [MIBM],
                          Noida
                        </option>
                        <option>
                          Matu Ram Institute of Engineering and Management -
                          [MRIEM], Rohtak
                        </option>
                        <option>
                          Maulana Azad Institute of Dental Sciences - [MAIDS],
                          New Delhi
                        </option>
                        <option>
                          Maulana Azad Medical College - [MAMC], New Delhi
                        </option>
                        <option>
                          Max Healthcare Education Rohini, New Delhi
                        </option>
                        <option>
                          Max Healthcare Education Vaishali, Ghaziabad
                        </option>
                        <option>Max SkillFirst Saket, New Delhi</option>
                        <option>
                          Meera Bai Institute of Technology, New Delhi
                        </option>
                        <option>Meerut College, Meerut</option>
                        <option>
                          Meerut Institute of Engineering and Technology -
                          [MIET], Meerut
                        </option>
                        <option>
                          Meerut Institute of Technology - [MIT], Meerut
                        </option>
                        <option>
                          Meerut International Institute of Technology - [MIIT],
                          Meerut
                        </option>
                        <option>
                          Metro College of Health Sciences and Research -
                          [MCHSR], Greater Noida
                        </option>
                        <option>
                          Metropolitan School of Management- [MSM], New Delhi
                        </option>
                        <option>Mewar Group of Institutions, Ghaziabad</option>
                        <option>
                          Mewar Institute of Management, Ghaziabad
                        </option>
                        <option>Mewar Law Institute, Ghaziabad</option>
                        <option>
                          Mewat Engineering College - [MECW], Mewat
                        </option>
                        <option>
                          Milestone Institute of Professional Studies - [MIPS],
                          Ghaziabad
                        </option>
                        <option>
                          Millennium School of Business - [MSOB], New Delhi
                        </option>
                        <option>Minerva College of Education, Karnal</option>
                        <option>Miranda House, New Delhi</option>
                        <option>Modern College of Education, Panipat</option>
                        <option>Modern College of Law, Ghaziabad</option>
                        <option>
                          Modern College of Professional Studies - [MCPS],
                          Ghaziabad
                        </option>
                        <option>
                          Modern Institute of Technology and Management -
                          [MITM], Ghaziabad
                        </option>
                        <option>
                          Modern Institute of Technology and Research Centre
                          -[MITRC], Alwar
                        </option>
                        <option>
                          Modern International College of Education - [MICE],
                          Faridabad
                        </option>
                        <option>
                          Modern Vidya Niketan - [MVN University], Palwal
                        </option>
                        <option>
                          Modinagar Institute of Technology - [MIT], Ghaziabad
                        </option>
                        <option>Monad University, Hapur</option>
                        <option>Monad University, School of Law, Hapur</option>
                        <option>
                          Monad University, School of Management and Business
                          Studies - [SMBS], Hapur
                        </option>
                        <option>
                          Monika Virmani Teacher's Training College - [MVTTC],
                          Alwar
                        </option>
                        <option>
                          Morarji Desai National Institute of Yoga - [MDNIY],
                          New Delhi
                        </option>
                        <option>
                          Motilal Nehru College (Evening), New Delhi
                        </option>
                        <option>
                          Motilal Nehru College - [MLNC], New Delhi
                        </option>
                        <option>
                          Mukhi College of Education - [MCE], Sonepat
                        </option>
                        <option>
                          Muzaffarnagar Medical College - [MMC], Muzaffarnagar
                        </option>
                        <option>NBA Group of Institutions, New Delhi</option>
                        <option>
                          NBA School of Mass Communication, New Delhi
                        </option>
                        <option>NC College of Engineering, Panipat</option>
                        <option>NCU, School of Law, Gurgaon</option>
                        <option>
                          NCU, School of Management and Liberal Studies, Gurgaon
                        </option>
                        <option>NDMC Medical College, New Delhi</option>
                        <option>
                          NGF College of Engineering and Technology - [NGFCET],
                          Palwal
                        </option>
                        <option>
                          NIEM The Institute of Event Management, New Delhi
                        </option>
                        <option>
                          NIET Campus - powered by Sunstone’s Edge, Greater
                          Noida
                        </option>
                        <option>
                          NIILM Centre For Management Studies - [NIILM CMS],
                          Greater Noida
                        </option>
                        <option>NIIT University - [NU], Neemrana</option>
                        <option>
                          NIU Campus - powered by Sunstone’s Edge, Gautam Budh
                          Nagar
                        </option>
                        <option>
                          NKBR College of Pharmacy &amp; Research Centre, Meerut
                        </option>
                        <option>
                          NRAI School of Mass Communication, New Delhi
                        </option>
                        <option>NREC college, Khurja, Bulandshahr</option>
                        <option>
                          NS Institute of Management and Technology, Sonepat
                        </option>
                        <option>NTPC School of Business - [NSB], Noida</option>
                        <option>Nalwa College of Education, Panipat</option>
                        <option>
                          Nanak Chand Anglo Sanskrit College, Meerut
                        </option>
                        <option>Naraini Group of Institutions, Karnal</option>
                        <option>
                          National Academy Of Sports Management (NASM), Noida
                        </option>
                        <option>
                          National Academy of Agricultural Sciences - [NAAS],
                          New Delhi
                        </option>
                        <option>
                          National Academy of Event Management &amp; Development
                          - [NAEMD], Noida
                        </option>
                        <option>
                          National Brain Research Centre - [NBRC], Gurgaon
                        </option>
                        <option>
                          National Bureau of Plant Genetic Resources - [NBPGR],
                          New Delhi
                        </option>
                        <option>
                          National Centre for Integrated Pest Management -
                          [NCIPM], New Delhi
                        </option>
                        <option>
                          National Council For Hotel Management and Catering
                          Technology, Noida
                        </option>
                        <option>
                          National Council for Promotion of Urdu Language-
                          [NCPUL], New Delhi
                        </option>
                        <option>
                          National Dairy Research Institute - [NDRI], Karnal
                        </option>
                        <option>
                          National Heart Institute and Research Centre - [NHI],
                          New Delhi
                        </option>
                        <option>
                          National Institute of Advertising, Noida
                        </option>
                        <option>
                          National Institute of Communicable Diseases - [NICD],
                          New Delhi
                        </option>
                        <option>
                          National Institute of Construction Management and
                          Research - [NICMAR], New Delhi
                        </option>
                        <option>
                          National Institute of Educational Planning and
                          Administration - [NIEPA], New Delhi
                        </option>
                        <option>
                          National Institute of Fashion Technology - [NIFT], New
                          Delhi
                        </option>
                        <option>
                          National Institute of Financial Markets - [NIFM], New
                          Delhi
                        </option>
                        <option>
                          National Institute of Food Technology Entrepreneurship
                          and Management - [NIFTEM], Sonepat
                        </option>
                        <option>
                          National Institute of Health and Family Welfare-
                          [NIHFW], New Delhi
                        </option>
                        <option>
                          National Institute of Learning and Academics - [NILA],
                          Gurgaon
                        </option>
                        <option>
                          National Institute of Management and Technology -
                          [NIMT], Ghaziabad
                        </option>
                        <option>
                          National Institute of Management and Technology -
                          [NIMT], Greater Noida
                        </option>
                        <option>
                          National Institute of Mass Communication - [NIMC], New
                          Delhi
                        </option>
                        <option>
                          National Institute of Pathology - [IOP], New Delhi
                        </option>
                        <option>
                          National Institute of Plant Genome Research - [NIPGR],
                          New Delhi
                        </option>
                        <option>
                          National Institute of Technology - [NIT], New Delhi
                        </option>
                        <option>
                          National Institute of Tuberculosis and Respiratory
                          Diseases -[NITRD], New Delhi
                        </option>
                        <option>
                          National Law University - [NLU], New Delhi
                        </option>
                        <option>
                          National Museum Institute of History of Art
                          Conservation and Museology, New Delhi
                        </option>
                        <option>
                          National Physical Laboratory - [NPL], New Delhi
                        </option>
                        <option>
                          National Power Training Institute - [NPTI], Faridabad
                        </option>
                        <option>
                          National Power Training Institute - [NPTI], New Delhi
                        </option>
                        <option>
                          National School of Drama - [NSD], New Delhi
                        </option>
                        <option>National TT College for Girls, Alwar</option>
                        <option>Navyug College of Education, Sonepat</option>
                        <option>
                          Neelkanth Group of Institutions - [NGI], Meerut
                        </option>
                        <option>
                          Nehru Homeopathic Medical College &amp; Hospital, New
                          Delhi
                        </option>
                        <option>
                          Netaji Subhas University of Technology - [NSUT] East
                          Campus, New Delhi
                        </option>
                        <option>
                          Netaji Subhas University of Technology - [NSUT] West
                          Campus, New Delhi
                        </option>
                        <option>
                          Netaji Subhas University of Technology - [NSUT], New
                          Delhi
                        </option>
                        <option>
                          Netaji Subhash Chandra Bose Subharti Medical College,
                          Meerut
                        </option>
                        <option>
                          New Delhi Institute For Information Technology &amp;
                          Management - [NDIITM], New Delhi
                        </option>
                        <option>
                          New Delhi Institute of Management - [NDIM], New Delhi
                        </option>
                        <option>
                          New Delhi Institute of Management - [NDIM], New Delhi
                        </option>
                        <option>
                          New Delhi Institution of Event Management - [NDIEM],
                          New Delhi
                        </option>
                        <option>
                          New Delhi Institution of Management - [NDIM], New
                          Delhi
                        </option>
                        <option>
                          Nightingale Institute of Nursing - [NIN], Noida
                        </option>
                        <option>
                          Nirankari Baba Gurbachan Singh Memorial College, Sohna
                        </option>
                        <option>
                          Nitra Technical Campus - [NTC], Ghaziabad
                        </option>
                        <option>
                          Noida Institute of Engineering and Technology -
                          [NIET], Greater Noida
                        </option>
                        <option>
                          Noida International University - [NIU], Greater Noida
                        </option>
                        <option>
                          Noida International University, School Of Engineering
                          &amp; Technology - [SOET], Greater Noida
                        </option>
                        <option>
                          Noida International University, School of Business
                          Management -[SBM], Greater Noida
                        </option>
                        <option>
                          Noida International University, School of Law and
                          Legal Affairs - [SLLA], Greater Noida
                        </option>
                        <option>
                          Noida International University, School of Nursing
                          &amp; Health Science - [SNHS], Greater Noida
                        </option>
                        <option>
                          Noida International University, School of Sciences-
                          [SOS], Greater Noida
                        </option>
                        <option>
                          Northern Institute Of Pharmacy and Research-[NIPR],
                          Alwar
                        </option>
                        <option>
                          Northern Institute of Engineering Technical Campus -
                          [NIET], Alwar
                        </option>
                        <option>
                          O.P. Jindal Global University - [JGU], Sonepat
                        </option>
                        <option>
                          O.P. Jindal Global University, Jindal Global Business
                          School - [JGBS], Sonepat
                        </option>
                        <option>
                          O.P. Jindal Global University, Jindal Global Law
                          School - [JGLS], Sonepat
                        </option>
                        <option>
                          O.P. Jindal Global University, Jindal School of Art
                          &amp; Architecture - [JSAA], Sonepat
                        </option>
                        <option>
                          O.P. Jindal Global University, Jindal School of
                          Banking &amp; Finance - [JSBF], Sonepat
                        </option>
                        <option>
                          O.P. Jindal Global University, Jindal School of
                          Environment and Sustainability - [JSES], Sonepat
                        </option>
                        <option>
                          O.P. Jindal Global University, Jindal School of
                          Government and Public Policy - [JSGP], Sonepat
                        </option>
                        <option>
                          O.P. Jindal Global University, Jindal School of
                          International Affairs - [JSIA], Sonepat
                        </option>
                        <option>
                          O.P. Jindal Global University, Jindal School of
                          Journalism &amp; Communication - [JSJC], Sonepat
                        </option>
                        <option>
                          O.P. Jindal Global University, Jindal School of
                          Languages and Literature - [JSLL], Sonepat
                        </option>
                        <option>
                          O.P. Jindal Global University, Jindal School of
                          Liberal Arts and Humanities - [JSLH], Sonepat
                        </option>
                        <option>
                          O.P. Jindal Global University, Jindal School of
                          Psychology and Counselling - [JSPC], Sonepat
                        </option>
                        <option>
                          O.P. Jindal Global University, Jindal School of Public
                          Health and Human Development - [JSPH], Sonepat
                        </option>
                        <option>
                          Oberoi Centre of Learning and Development - [OCLD],
                          New Delhi
                        </option>
                        <option>Orane International, Gurgaon</option>
                        <option>Orlean College of Pharmacy, Noida</option>
                        <option>
                          Osiyan School of Business Management and Animation -
                          [OSBMA], New Delhi
                        </option>
                        <option>Oxford College Of Pharmacy, Hapur</option>
                        <option>PDM School of Pharmacy - [PDMSOP], Jind</option>
                        <option>PGDAV College (Evening), New Delhi</option>
                        <option>PGDAV College, New Delhi</option>
                        <option>PIET NCR College, Panipat</option>
                        <option>
                          PKG Group of Institutions - [PKGGI], Panipat
                        </option>
                        <option>
                          PNS Institute of Technology and Management - [PNSITM],
                          Muzaffarnagar
                        </option>
                        <option>
                          Pacific Institute of Engineering and Management -
                          [PIEM], New Delhi
                        </option>
                        <option>
                          Padarpan Films and Theatre Institute - [PFTI], New
                          Delhi
                        </option>
                        <option>
                          Panchwati Institute of Engineering &amp; Technology,
                          Meerut
                        </option>
                        <option>
                          Pandit Bhagwat Dayal Sharma University of Health
                          Sciences, Rohtak
                        </option>
                        <option>
                          Pandit L.R. College of Technology - [PLRCT], Faridabad
                        </option>
                        <option>
                          Pandit Lakshmi Chand State University of Performing
                          and Visual Arts, Rohtak
                        </option>
                        <option>
                          Panipat Institute of Engineering &amp; Technology -
                          [PIET], Panipat
                        </option>
                        <option>Pearl Academy South Campus, New Delhi</option>
                        <option>Pearl Academy West Campus, New Delhi</option>
                        <option>
                          Pearl International Institute of Hotel Management -
                          [PIIHM], Sonepat
                        </option>
                        <option>
                          Periyar Management and Computer College, New Delhi
                        </option>
                        <option>
                          Periyar School of Architecture -[PSA], New Delhi
                        </option>
                        <option>
                          Polytechnic for Women - [PFW], New Delhi
                        </option>
                        <option>
                          Pradeep Memorial Comprehensive College of Education
                          -[PMCCE], New Delhi
                        </option>
                        <option>Pratap College of Education, Karnal</option>
                        <option>
                          Presidency College of Education and Technology, Meerut
                        </option>
                        <option>
                          Primordial Center of Excellence, Gurgaon
                        </option>
                        <option>
                          Prince Institute of Innovative Technology - [PIIT],
                          Greater Noida
                        </option>
                        <option>
                          Priyadarshini College of Computer Sciences - [PCCS],
                          Noida
                        </option>
                        <option>
                          Pt Bhagwat Dayal Sharma Post Graduate Institute of
                          Medical Sciences - [PGIMS], Rohtak
                        </option>
                        <option>
                          Pt Jawahar Lal Nehru Government College, Faridabad
                        </option>
                        <option>
                          Pt Sujan Singh Degree College (Institute of Advanced
                          Management and Technology), Meerut
                        </option>
                        <option>
                          Pt. Chiranji Lal Sharma Govt. P.G. College, Karnal
                        </option>
                        <option>
                          Pt. Deen Dayal Upadhyay Management College - [DDUMC],
                          Meerut
                        </option>
                        <option>
                          Pt. Deendayal Upadhyay Institute for the Physically
                          Handicapped, New Delhi
                        </option>
                        <option>
                          Pt. Naki Ram Sharma Goverment College, Rohtak
                        </option>
                        <option>
                          Puppets Picture College of Mass Communication, Noida
                        </option>
                        <option>Puran Murti Campus - [PMC], Sonepat</option>
                        <option>
                          Puran Murti College of Pharmacy, Sonepat
                        </option>
                        <option>Pusa Institute of Technology, New Delhi</option>
                        <option>
                          R.C. Institute of Technology - [RCIT], New Delhi
                        </option>
                        <option>RD Engineering College, Ghaziabad</option>
                        <option>
                          RG Institute of Professional Studies, Ghaziabad
                        </option>
                        <option>
                          RICS School of Built Environment, Amity University -
                          [RICS SBE], Noida
                        </option>
                        <option>
                          RIG Institute of Hospitality and Management, Greater
                          Noida
                        </option>
                        <option>
                          RIG Institute of Hospitality and Management, New Delhi
                        </option>
                        <option>
                          RIG Institute of Hotel Management Dwarka, New Delhi
                        </option>
                        <option>
                          RIG Institute of Hotel Management Rohini, New Delhi
                        </option>
                        <option>
                          RISHI Institute of Engineering and Technology -
                          [RIET], Meerut
                        </option>
                        <option>
                          RJ Institute of Higher Education, Bulandshahr
                        </option>
                        <option>
                          RK Films and Media Academy - [RKFMA], New Delhi
                        </option>
                        <option>
                          RN College of Engineering and Management, Rohtak
                        </option>
                        <option>
                          RN College of Engineering and Technology - [RNCET],
                          Panipat
                        </option>
                        <option>
                          RN Institute of Modern Management And Education
                          Research Centre -[RNI], Meerut
                        </option>
                        <option>
                          RP Inderaprastha Institute of Technology - [RPIIT],
                          Karnal
                        </option>
                        <option>
                          RS Memorial College of Education, Panipat
                        </option>
                        <option>RV Northland Institute, Ghaziabad</option>
                        <option>
                          Radha Govind College of Education, Greater Noida
                        </option>
                        <option>
                          Radha Govind Group of Institutions - [RGGI], Meerut
                        </option>
                        <option>
                          Raffles University, Alabbar School of Management -
                          [ASM], Alwar
                        </option>
                        <option>Raffles University, Neemrana</option>
                        <option>
                          Raffles University, School of Engineering, Alwar
                        </option>
                        <option>
                          Raffles University, School of Law, Alwar
                        </option>
                        <option>Raj College of Education, Rohtak</option>
                        <option>
                          Raj Kumar Goel Engineering College - [RKGEC],
                          Ghaziabad
                        </option>
                        <option>
                          Raj Kumar Goel Girls Degree College, Ghaziabad
                        </option>
                        <option>
                          Raj Kumar Goel Institute of Technology &amp;
                          Management - [RKGITM], Ghaziabad
                        </option>
                        <option>
                          Raj Kumar Goel Institute of Technology - [RKGIT],
                          Ghaziabad
                        </option>
                        <option>
                          Raj Rishi Bhartrihari Matsya University - [RRBMU],
                          Alwar
                        </option>
                        <option>Rajdhani College, New Delhi</option>
                        <option>
                          Rajkumari Amrit Kaur College of Nursing - [RAKCON],
                          New Delhi
                        </option>
                        <option>
                          Rakshpal Bahadur Management Institute - [RBMI],
                          Greater Noida
                        </option>
                        <option>
                          Ram Gopal College of Pharmacy - [RGCP], Gurgaon
                        </option>
                        <option>
                          Ram Lal Anand College - [RLA], New Delhi
                        </option>
                        <option>
                          Ram Narayan Institute of Education, Jind
                        </option>
                        <option>
                          Ram Nath Memorial College, Hastinapur, Meerut
                        </option>
                        <option>
                          Ram-Eesh Group of Institutions, Greater Noida
                        </option>
                        <option>
                          Ram-Eesh Institute of Education - [RIE], Greater Noida
                        </option>
                        <option>
                          Ram-Eesh Institute of Engineering and Technology -
                          [RIET], Greater Noida
                        </option>
                        <option>
                          Ram-Eesh Institute of Vocational and Technical
                          Education, Greater Noida
                        </option>
                        <option>Rama College of Education, Meerut</option>
                        <option>Rama Devi Kanya Mahavidyalaya, Noida</option>
                        <option>
                          Rama Institute of Business Studies - [RIBS] Delhi NCR
                          Campus, Hapur
                        </option>
                        <option>
                          Rama Krishna College of Education, Rohtak
                        </option>
                        <option>
                          Rama Medical College Hospital &amp; Research Centre,
                          Hapur
                        </option>
                        <option>Rama University, Hapur</option>
                        <option>Ramanujan College of Education, Palwal</option>
                        <option>Ramanujan college, New Delhi</option>
                        <option>Ramjas College, New Delhi</option>
                        <option>
                          Rani Laxmi Bai Mahila Degree College, Meerut
                        </option>
                        <option>
                          Rao Adal Singh College of Education, Mewat
                        </option>
                        <option>
                          Rao Dalip Singh College of Education - [RDS], Gurgaon
                        </option>
                        <option>
                          Rashtram School of Public Leadership, Sonepat
                        </option>
                        <option>Rashtriya College of Education, Rohtak</option>
                        <option>Rashtriya Sanskrit Sansthan, New Delhi</option>
                        <option>
                          Rastriya Vidya Educational College - [RVEC], Gurgaon
                        </option>
                        <option>
                          Rattan Institute of Technology and Management -
                          [RITM], Palwal
                        </option>
                        <option>
                          Rawal College of Education - [RCE], Faridabad
                        </option>
                        <option>
                          Rawal Institute of Engineering and Technology -
                          [RIET], Faridabad
                        </option>
                        <option>
                          Rawal Institute of Management - [RIM], Faridabad
                        </option>
                        <option>Rawal Institutions, Faridabad</option>
                        <option>
                          Rayat Bahra Innovative Institute of Technology and
                          Management - [RBIITM], Sonepat
                        </option>
                        <option>
                          Rayat-Bahra Royal Institute of Management and
                          Technology - [RIMT], Sonepat
                        </option>
                        <option>
                          Regional Centre for Biotechnology - [RCB], Gurgaon
                        </option>
                        <option>Reliable Institute, Ghaziabad</option>
                        <option>
                          Rishi Chadha Vishvas Girls Institute of Technology -
                          [RCVGIT], Ghaziabad
                        </option>
                        <option>Rishihood University, Sonepat</option>
                        <option>
                          Roorkee Engineering &amp; Management Technology
                          Institute - [RemTech], Muzaffarnagar
                        </option>
                        <option>Rudra Group of Institutions, Meerut</option>
                        <option>
                          Rukmini Devi College of Education - [RDCOE], New Delhi
                        </option>
                        <option>
                          Rukmini Devi Institute of Advanced Studies - [RDIAS],
                          New Delhi
                        </option>
                        <option>
                          SD College of Engineering and Technology - [SDCET],
                          Muzaffarnagar
                        </option>
                        <option>SD College of Law, Muzaffarnagar</option>
                        <option>
                          SD College of Management Studies, Muzaffarnagar
                        </option>
                        <option>
                          SD College of Pharmacy and Vocational studies,
                          Muzaffarnagar
                        </option>
                        <option>SD PG College, Muzaffarnagar</option>
                        <option>SD PG College, panipat, Panipat</option>
                        <option>
                          SGT Dental College Hospital &amp; Research Institute,
                          Gurgaon
                        </option>
                        <option>
                          SGT Institute of Engineering and Technology -
                          [SGTIET], Gurgaon
                        </option>
                        <option>
                          SGT Medical College, Hospital &amp; Research
                          Institute, Gurgaon
                        </option>
                        <option>
                          SGT University, Faculty of Allied Health Sciences,
                          Gurgaon
                        </option>
                        <option>
                          SGT University, Faculty of Commerce &amp; Management,
                          Gurgaon
                        </option>
                        <option>SGT University, Faculty of Law, Gurgaon</option>
                        <option>SGT University, Gurgaon</option>
                        <option>SJK College, Rohtak</option>
                        <option>SOIL Institute of Management, Gurgaon</option>
                        <option>SOS Nursing School, Faridabad</option>
                        <option>SR College of Education, Rohtak</option>
                        <option>SRM College of Education, Jind</option>
                        <option>SRM University Delhi NCR, Sonepat</option>
                        <option>SRMIST Delhi NCR Campus, Ghaziabad</option>
                        <option>
                          SRS Institute of Education and Technology, Meerut
                        </option>
                        <option>SS College of Education, Rohtak</option>
                        <option>SVS Group Of Institutions, Meerut</option>
                        <option>
                          SYMK Institute Of Hospitality Management, New Delhi
                        </option>
                        <option>
                          Sachdeva Institute of Management &amp; Technology -
                          [SIMT], New Delhi
                        </option>
                        <option>
                          Sadhna Academy for Media Studies - [SAMS], Noida
                        </option>
                        <option>Saheed Mahilal Institute, Palwal</option>
                        <option>Saini Co-education College, Rohtak</option>
                        <option>Salokaya College of Nursing, New Delhi</option>
                        <option>
                          Samalkha Group of Institutions - [SGI], Panipat
                        </option>
                        <option>
                          Samarth Institute for Education and Technology -
                          [SIET], Meerut
                        </option>
                        <option>Sangeet Natak Akademi, New Delhi</option>
                        <option>Sankalp Institute, Ghaziabad</option>
                        <option>
                          Sanlok Institute of Management and Information
                          Technology - [SIMIT], Gurgaon
                        </option>
                        <option>
                          Sanskar Educational Group - [SEG], Ghaziabad
                        </option>
                        <option>
                          Sanskriti Institute of Hotel Management, Meerut
                        </option>
                        <option>
                          Sant Hari Dass College of Higher Education - [SHDCHE],
                          New Delhi
                        </option>
                        <option>
                          Sant Ratan Das College of Education, Ghaziabad
                        </option>
                        <option>
                          Sant Vivekanand College of Law &amp; Higher Studies -
                          [SVCL], Ghaziabad
                        </option>
                        <option>
                          Santosh Institute of Allied Health Sciences, Ghaziabad
                        </option>
                        <option>Santosh University, Ghaziabad</option>
                        <option>
                          Saraswathi Institute Of Medical Sciences - [SIMS],
                          Hapur
                        </option>
                        <option>
                          Saraswati Institute of Engineering and Technology -
                          [SIET], New Delhi
                        </option>
                        <option>
                          Saraswati Vidya Mandir College of Education, Mewat
                        </option>
                        <option>
                          Saraswati Vidya Mandir Law College - [SVMLC],
                          Bulandshahr
                        </option>
                        <option>
                          Sardar Patel College of Education - [SPCOE], Gurgaon
                        </option>
                        <option>
                          Sardar Patel Subharti Institute of Law - [SLC], Meerut
                        </option>
                        <option>
                          Sardar Vallabh Bhai Patel University of Agriculture
                          and Technology, Meerut
                        </option>
                        <option>
                          Sarvodaya Hospital and Research Center, Faridabad
                        </option>
                        <option>
                          Sarvottam Institute of Technology and Management -
                          [SITM], Noida
                        </option>
                        <option>
                          Sat Priya College of Education - [SPCE], Rohtak
                        </option>
                        <option>
                          Sat Priya Institute of Engineering and Technology -
                          [SPIET], Rohtak
                        </option>
                        <option>
                          Sat Priya School of Architecture and Design, Rohtak
                        </option>
                        <option>
                          Satya Group of Institutions - [SGI], Faridabad
                        </option>
                        <option>
                          Satyam College of Education - [SCE], Noida
                        </option>
                        <option>Satyam Fashion Institute - [SFI], Noida</option>
                        <option>Satyawati College, New Delhi</option>
                        <option>Satyawati Evening College, New Delhi</option>
                        <option>
                          Satyug Darshan Institute of Engineering &amp;
                          Technology - [SDIET], Faridabad
                        </option>
                        <option>
                          School Of Business Management &amp; Technology -
                          [SBMT], Bulandshahr
                        </option>
                        <option>
                          School of Aeronautics - [SOA], New Delhi
                        </option>
                        <option>
                          School of Agriculture and Applied Science, Monad
                          University, Hapur
                        </option>
                        <option>
                          School of Animation, Maharshi University Institute of
                          Technology, Noida
                        </option>
                        <option>
                          School of Aviation Science and Technology - [SAST],
                          Delhi Flying Club, New Delhi
                        </option>
                        <option>
                          School of Bioscience, Apeejay Stya University -[SBS],
                          Gurgaon
                        </option>
                        <option>
                          School of Design and Visual Arts, Apeejay Stya
                          University -[SDVA], Gurgaon
                        </option>
                        <option>
                          School of Education, Apeejay Stya University - [SoE],
                          Gurgaon
                        </option>
                        <option>
                          School of Engineering &amp; Technology, Monad
                          University - [SET], Hapur
                        </option>
                        <option>
                          School of Engineering and Technology, NCU - [SOET],
                          Gurgaon
                        </option>
                        <option>
                          School of Journalism and Mass Communication, Apeejay
                          Stya University - [SJMC], Gurgaon
                        </option>
                        <option>
                          School of Journalism and Mass Communication, Satyam
                          Group of Institutions, Noida
                        </option>
                        <option>
                          School of Legal Studies, Apeejay Stya University -
                          [SLS], Gurgaon
                        </option>
                        <option>
                          School of Management and Technology - [SMT], Meerut
                        </option>
                        <option>
                          School of Open Learning, University of Delhi -
                          [SOLDU], New Delhi
                        </option>
                        <option>
                          School of Planning and Architecture - [SPA], New Delhi
                        </option>
                        <option>Secure Success Academy, New Delhi</option>
                        <option>
                          Seth Ganga Sagar Jatiya Polytechnic-[SGSJP],
                          Bulandshahr
                        </option>
                        <option>
                          Seth Jaiprakash Mukandlal Polytechnic For Women,
                          Ghaziabad
                        </option>
                        <option>Sh. L.N Hindu College, Rohtak</option>
                        <option>
                          Sha-Shib Aerospace Engineering - [SAE], Gurgaon
                        </option>
                        <option>
                          Shaharyar 19 Neptune Film Institute, Noida
                        </option>
                        <option>
                          Shaheed Bhagat Singh College - [SBSC], New Delhi
                        </option>
                        <option>
                          Shaheed Bhagat Singh College of Education, Meerut
                        </option>
                        <option>
                          Shaheed Bhagat Singh Evening College, New Delhi
                        </option>
                        <option>
                          Shaheed Hasan Khan Mewati Government Medical College -
                          [SHKM] Nalhar, Mewat
                        </option>
                        <option>
                          Shaheed Rajguru College of Applied Sciences for Women,
                          New Delhi
                        </option>
                        <option>
                          Shaheed Sukhdev College of Business Studies - [SSCBS],
                          New Delhi
                        </option>
                        <option>
                          Shambhu Dayal College of Education - [SDCOE], Sonepat
                        </option>
                        <option>
                          Shamli Institute of Engineering and Technology -
                          [SIET], Muzaffarnagar
                        </option>
                        <option>
                          Shanti Institute of Technology - [SIT], Meerut
                        </option>
                        <option>
                          Shanti Niketan Group of Institution - [SNGI], Meerut
                        </option>
                        <option>Sharda University - [SU], Greater Noida</option>
                        <option>
                          Sharda University, School Humanities and Social
                          Sciences - [SHSS], Greater Noida
                        </option>
                        <option>
                          Sharda University, School of Agricultural Sciences -
                          [SASR], Greater Noida
                        </option>
                        <option>
                          Sharda University, School of Allied Health Sciences -
                          [SAHS], Greater Noida
                        </option>
                        <option>
                          Sharda University, School of Architecture and Planning
                          - [SAP], Greater Noida
                        </option>
                        <option>
                          Sharda University, School of Basic Sciences and
                          Research - [SBSR], Greater Noida
                        </option>
                        <option>
                          Sharda University, School of Business Studies - [SBS],
                          Greater Noida
                        </option>
                        <option>
                          Sharda University, School of Dental Sciences - [SDS],
                          Greater Noida
                        </option>
                        <option>
                          Sharda University, School of Education - [SOE],
                          Greater Noida
                        </option>
                        <option>
                          Sharda University, School of Engineering and
                          Technology - [SET], Greater Noida
                        </option>
                        <option>
                          Sharda University, School of Law - [SOL], Greater
                          Noida
                        </option>
                        <option>
                          Sharda University, School of Media Film And
                          Entertainment - [SMFE], Greater Noida
                        </option>
                        <option>
                          Sharda University, School of Medical Sciences and
                          Research - [SMSR], Greater Noida
                        </option>
                        <option>
                          Sharda University, School of Nursing Sciences and
                          Research - [SNSR], Greater Noida
                        </option>
                        <option>
                          Sharda University, School of Pharmacy - [SOP], Greater
                          Noida
                        </option>
                        <option>
                          Shikshapeeth College of Management and Technology -
                          [SCMT], New Delhi
                        </option>
                        <option>Shiv College of Education, Faridabad</option>
                        <option>
                          Shiv Karan College of Education, Sonepat
                        </option>
                        <option>
                          Shiv Nadar University - [SNU], Greater Noida
                        </option>
                        <option>
                          Shiv Nadar University, School of Engineering - [SOE],
                          Greater Noida
                        </option>
                        <option>
                          Shiva Institute of Management Studies - [SIMS],
                          Ghaziabad
                        </option>
                        <option>Shivaji College, New Delhi</option>
                        <option>
                          Shobhit (Deemed to be University) Campus - powered by
                          Sunstone’s Edge, Meerut
                        </option>
                        <option>Shobhit University, Meerut</option>
                        <option>
                          Shobhit University, School of Biological Engineering
                          and Sciences, Meerut
                        </option>
                        <option>
                          Shobhit University, School of Business Studies, Meerut
                        </option>
                        <option>
                          Shobhit University, School of Law and Constitutional
                          Studies, Meerut
                        </option>
                        <option>
                          Shree Bala Ji Degree College - [SBDC], Meerut
                        </option>
                        <option>
                          Shree Bankey Bihari Dental College and Research Centre
                          - [SBBDC], Ghaziabad
                        </option>
                        <option>
                          Shree Bankey Bihari Institutions of Architecture -
                          [SBBIA], Meerut
                        </option>
                        <option>
                          Shree Bankey Bihari Institutions of Engineering -
                          [SBBIE], Meerut
                        </option>
                        <option>
                          Shree Bankey Bihari Institutions of Management -
                          [SBBIM], Meerut
                        </option>
                        <option>
                          Shree Mahaveer Girls Degree College - [SMGDC], Meerut
                        </option>
                        <option>
                          Shree Ram Ayurvedic Medical College &amp; Hospital,
                          Meerut
                        </option>
                        <option>
                          Shree Ram Memorial College of Education, Sonepat
                        </option>
                        <option>
                          Shree Sai College of Education &amp; Technology -
                          [SSCET], Meerut
                        </option>
                        <option>
                          Shri Baba Mastnath Dental College and Hospital, Rohtak
                        </option>
                        <option>
                          Shri Baba Mastnath Institute of Pharmaceutical
                          Sciences and Research, Rohtak
                        </option>
                        <option>
                          Shri Balaji College of Education, Rohtak
                        </option>
                        <option>
                          Shri Balwant Institute of Technology - [SBIT], Sonepat
                        </option>
                        <option>
                          Shri Lal Bahadur Shastri National Sanskrit University,
                          New Delhi
                        </option>
                        <option>
                          Shri Madhav College of Education and Technology -
                          [SMCET], Ghaziabad
                        </option>
                        <option>
                          Shri Parshvanath Institute of Eduction and Research -
                          [SPIER], Meerut
                        </option>
                        <option>
                          Shri Ram Centre for Performing Arts, New Delhi
                        </option>
                        <option>
                          Shri Ram College Of Law - [SRCL], Muzaffarnagar
                        </option>
                        <option>
                          Shri Ram College of Commerce - [SRCC], New Delhi
                        </option>
                        <option>Shri Ram College of Education, Gurgaon</option>
                        <option>
                          Shri Ram College of Engineering and Management -
                          [SRCEM], Palwal
                        </option>
                        <option>
                          Shri Ram Group of Colleges - [SRGC], Muzaffarnagar
                        </option>
                        <option>
                          Shri Ram Institute of Management &amp; Technology -
                          [SRIMT], New Delhi
                        </option>
                        <option>
                          Shri Ram Institute of Technology - [SRIT], Meerut
                        </option>
                        <option>Shri Ram Polytechnic, Muzaffarnagar</option>
                        <option>
                          Shri Saraswati Vidyalya Post Graduate College, Hapur
                        </option>
                        <option>
                          Shri Shiv Chaitanya College of Education, Gurgaon
                        </option>
                        <option>
                          Shri Vishwakarma Skill University, Palwal
                        </option>
                        <option>
                          ShrinathJi Institute for Technical
                          Education-[SRITECH], Meerut
                        </option>
                        <option>
                          Shriram Institute of Maritime Studies- [SIMS], New
                          Delhi
                        </option>
                        <option>
                          Shyam Institute of Management and Technology, New
                          Delhi
                        </option>
                        <option>Shyam Lal College (Evening), New Delhi</option>
                        <option>Shyam Lal College - [SLC], New Delhi</option>
                        <option>
                          Shyama Prasad Mukherji College For Women, New Delhi
                        </option>
                        <option>
                          Siddhi Vinayak College of Profestional Studies,
                          Panipat
                        </option>
                        <option>
                          Siddhi Vinayak Engineering and Management College,
                          Alwar
                        </option>
                        <option>Siddhi Vinayak Group of Colleges, Alwar</option>
                        <option>
                          Siddhivinayak College of Science and Higher Education,
                          Alwar
                        </option>
                        <option>
                          Silver Bells Institute for Higher Education - [SBIHE],
                          Muzaffarnagar
                        </option>
                        <option>
                          Sir Chhotu Ram Institute of Engineering and Technology
                          - [SCRIET], Meerut
                        </option>
                        <option>
                          Sirifort Institute of Management Studies, New Delhi
                        </option>
                        <option>Sivananda Yoga Vedanta, New Delhi</option>
                        <option>
                          Siya Ram Kasturi Devi College of Education - [SKD],
                          Meerut
                        </option>
                        <option>
                          Skyline Business School - [SKB], Gurgaon
                        </option>
                        <option>
                          Skyline Institute of Engineering and Technology -
                          [SIET], Greater Noida
                        </option>
                        <option>
                          Smt Bhagwani Memorial Institute of Higher Education,
                          Faridabad
                        </option>
                        <option>
                          Softdot HiTech Educational and Training Institute, New
                          Delhi
                        </option>
                        <option>
                          Sonepat Hindu Educational and Charitable Society,
                          Sonepat
                        </option>
                        <option>
                          South Asian University - [SAU], New Delhi
                        </option>
                        <option>
                          South Point College of Education, Sonepat
                        </option>
                        <option>
                          South Point College of Pharmacy - [SPCP], Sonepat
                        </option>
                        <option>
                          South Point Institute of Technology and Management,
                          Sonepat
                        </option>
                        <option>
                          Sparsh Global Business School - [SGBS], Greater Noida
                        </option>
                        <option>
                          Spectrum Institute of Pharmaceutical Sciences &amp;
                          Research - [SIPSAR], Greater Noida
                        </option>
                        <option>
                          Sri Aurobindo Centre for Arts and Communication -
                          [SACAC], New Delhi
                        </option>
                        <option>
                          Sri Aurobindo College (Evening), New Delhi
                        </option>
                        <option>Sri Aurobindo College, New Delhi</option>
                        <option>
                          Sri Guru Gobind Singh College of Commerce, New Delhi
                        </option>
                        <option>
                          Sri Guru Nanak Dev Khalsa College - [SGNDKC], New
                          Delhi
                        </option>
                        <option>
                          Sri Guru Tegh Bahadur Institute of Management and
                          Information Technology - [SGTBIM&amp;IT], New Delhi
                        </option>
                        <option>
                          Sri Guru Tegh Bahadur Khalsa College - [SGTB], New
                          Delhi
                        </option>
                        <option>
                          Sri Kund Kund Jain Post Graduate College,
                          Muzaffarnagar
                        </option>
                        <option>
                          Sri Ram Institute of Teacher Education - [SRITE], New
                          Delhi
                        </option>
                        <option>
                          Sri Sharada Institute of Indian Management and
                          Research - [SIIM], New Delhi
                        </option>
                        <option>
                          Sri Sukhmani Institute of Management, Dwarka - [SSIM],
                          New Delhi
                        </option>
                        <option>
                          Sri Venkateswara College - Delhi, New Delhi
                        </option>
                        <option>St Stephen's College, New Delhi</option>
                        <option>
                          St. Andrews Institute of Technology and Management -
                          [SAITM], Gurgaon
                        </option>
                        <option>
                          St. Catherine Institute of Management &amp; Technology
                          - [SCIMT], New Delhi
                        </option>
                        <option>
                          St. Lawrence College of Higher Education- [SLCHE], New
                          Delhi
                        </option>
                        <option>Star Aviation Academy - [SAA], Gurgaon</option>
                        <option>Starex Institute of Education, Gurgaon</option>
                        <option>Starex University, Gurgaon</option>
                        <option>
                          State Council of Educational Research and Training -
                          [SCERT], New Delhi
                        </option>
                        <option>
                          State Institute of Fashion Design - [SIFD], Rohtak
                        </option>
                        <option>State Institute of Fine Arts, Rohtak</option>
                        <option>
                          State Institute of Hotel Management - [IHM], Rohtak
                        </option>
                        <option>
                          State Institute of Urban Planning and Architectue -
                          [SIUPA], Rohtak
                        </option>
                        <option>
                          State Institution of Film and Television, Rohtak
                        </option>
                        <option>
                          Subharti College of Management &amp; Commerce, Meerut
                        </option>
                        <option>Subharti Dental College - [SDC], Meerut</option>
                        <option>
                          Subharti Institute of Management &amp; Commerce -
                          [SIMC], Meerut
                        </option>
                        <option>
                          Subharti Institute of Technology and Engineering -
                          [SITE], Meerut
                        </option>
                        <option>
                          Subramania Barathi College Of Science And Technology -
                          [SBCST], New Delhi
                        </option>
                        <option>
                          Sudha Rustagi College of Dental Sciences and Research,
                          Faridabad
                        </option>
                        <option>SunRise University - [SRU], Alwar</option>
                        <option>
                          Sunder Deep College of Architecture - [SDCA],
                          Ghaziabad
                        </option>
                        <option>
                          Sunder Deep College of Hotel Management - [SDCHM],
                          Ghaziabad
                        </option>
                        <option>
                          Sunder Deep Engineering College - [SDEC], Ghaziabad
                        </option>
                        <option>
                          Sunder Deep Group of Institutions - [SDGI], Ghaziabad
                        </option>
                        <option>
                          Sunder Deep International Institute of Hotel
                          Management - [SDI IHM], Ghaziabad
                        </option>
                        <option>
                          Sunder Deep Pharmacy College - [SDPC], Ghaziabad
                        </option>
                        <option>
                          Sunil Gugnani Memorial College of Education - [SGMCE],
                          Rohtak
                        </option>
                        <option>
                          Sushant School of Art and Architecture - [SSAA],
                          Gurgaon
                        </option>
                        <option>
                          Sushant School of Business - [SSB], Gurgaon
                        </option>
                        <option>
                          Sushant School of Design - [SSD], Gurgaon
                        </option>
                        <option>
                          Sushant University / Ansal University, Gurgaon
                        </option>
                        <option>
                          Sushant University, School Of Engineering and
                          Technology - [SOET], Gurgaon
                        </option>
                        <option>
                          Sushant University, School of Law - [SOL], Gurgaon
                        </option>
                        <option>
                          Sushil Institute of Management &amp; Technology -
                          [SIMT], Meerut
                        </option>
                        <option>
                          Swami Keshwanand Teacher Training Girls College, Alwar
                        </option>
                        <option>Swami Shraddhanand College, New Delhi</option>
                        <option>
                          Swami Vivekanand Subharti University - [SVSU], Meerut
                        </option>
                        <option>
                          Swami Vivekanand Subharti University, Directorate of
                          Distance Education - [DDE], Meerut
                        </option>
                        <option>
                          Symbiosis Centre for Management Studies - [SCMS],
                          Noida
                        </option>
                        <option>
                          Symbiosis International University - [SIUN], Noida
                        </option>
                        <option>Symbiosis Law School - [SLS], Noida</option>
                        <option>
                          TEDCO School Of Culinary Arts, New Delhi
                        </option>
                        <option>
                          TERI School of Advanced Studies - [TERI SAS], New
                          Delhi
                        </option>
                        <option>
                          TKWs Institute of Banking &amp; Finance - [TKWsIBF],
                          New Delhi
                        </option>
                        <option>
                          TMI Academy of Travel, Tourism &amp; Aviation Studies,
                          New Delhi
                        </option>
                        <option>
                          Tagore Institute of Research &amp; Technology, Gurgaon
                        </option>
                        <option>
                          TakeOne School of Mass Communication, New Delhi
                        </option>
                        <option>Tatyam School of Design, New Delhi</option>
                        <option>
                          Tech Mahindra Smart Academy for Healthcare, New Delhi
                        </option>
                        <option>
                          Tecnia Institute of Advanced Studies - [TIAS], New
                          Delhi
                        </option>
                        <option>
                          Tek Chand Mann College of Engineering - [TCMCE],
                          Sonepat
                        </option>
                        <option>The Aaryan College of Education, Rohtak</option>
                        <option>The Arohan Media School - [TAMS], Noida</option>
                        <option>
                          The Delhi School of Communication - [DSC], New Delhi
                        </option>
                        <option>The Design Village - [TDV], Noida</option>
                        <option>The Hotel School, New Delhi</option>
                        <option>
                          The Indian Society Of International Law - [ISIL], New
                          Delhi
                        </option>
                        <option>
                          The Institute of Company Secretaries of India -
                          [ICSI], New Delhi
                        </option>
                        <option>
                          The Lalit Suri Hospitality School - [TLSHS-F],
                          Faridabad
                        </option>
                        <option>
                          The Northcap University - [NCU], Gurgaon
                        </option>
                        <option>
                          The design institute of India - [TDII], New Delhi
                        </option>
                        <option>Tika Ram College of Education, Sonepat</option>
                        <option>Tika Ram P.G. Girls College, Sonepat</option>
                        <option>Times Pro, New Delhi</option>
                        <option>
                          Times School of Journalism- [TSJ], New Delhi
                        </option>
                        <option>Times School of Media, Greater Noida</option>
                        <option>
                          Tirupati Institute of Professional Studies - [TIPS],
                          Meerut
                        </option>
                        <option>
                          Tirupati Institute of Science &amp; Technology, Meerut
                        </option>
                        <option>Translam College of Education, Meerut</option>
                        <option>Translam College of Law, Meerut</option>
                        <option>
                          Translam Institute of Pharmaceutical Education and
                          Research - [TIPER], Meerut
                        </option>
                        <option>
                          Translam Institute of Technology and Management-
                          [TITM], Meerut
                        </option>
                        <option>
                          Translational Health Science and Technology Institute
                          - [THSTI], Faridabad
                        </option>
                        <option>
                          Tribhuvan College of Environment and Development
                          Sciences - [TEDS], Neemrana
                        </option>
                        <option>Trident College of Education, Meerut</option>
                        <option>
                          Trident Group of Institutions, Ghaziabad
                        </option>
                        <option>
                          Trinity Institute of Higher Education - [TIHE], New
                          Delhi
                        </option>
                        <option>
                          Trinity Institute of Innovations in Professional
                          Studies - [TIIPS], Greater Noida
                        </option>
                        <option>
                          Trinity Institute of Professional Studies - [TIPS],
                          New Delhi
                        </option>
                        <option>
                          Tritiya Air Hostess Academy - [TAHA], New Delhi
                        </option>
                        <option>
                          Tritya Institute of Event Management - [TIEM], New
                          Delhi
                        </option>
                        <option>
                          Tritya Maritime Academy - [TMA], New Delhi
                        </option>
                        <option>
                          U.P. Institute of Design - [UPID], Noida
                        </option>
                        <option>UEI Global Rohini, New Delhi</option>
                        <option>
                          Unique Institute of Management and Technology -
                          [UIMT], Ghaziabad
                        </option>
                        <option>
                          United College of Education Delhi-NCR, Greater Noida
                        </option>
                        <option>
                          United College of Engineering &amp; Research, Greater
                          Noida
                        </option>
                        <option>
                          United Group of Institutions - [UGI], Greater Noida
                        </option>
                        <option>
                          United Institute of Management - [UIM], Greater Noida
                        </option>
                        <option>
                          Unitedworld Institute of Design - [UID], Gurgaon
                        </option>
                        <option>
                          University College of Medical Sciences - [UCMS], New
                          Delhi
                        </option>
                        <option>
                          University Institute of Engineering and Technology,
                          Maharshi Dayanand University - [UIET], Rohtak
                        </option>
                        <option>
                          University Institute of Law and Management Studies -
                          [UILMS], Gurgaon
                        </option>
                        <option>
                          University Polytechnic, Jamia Milia Islamia, New Delhi
                        </option>
                        <option>
                          University School of Chemical Technology, Guru Gobind
                          Singh Indraprastha University - [USCT], New Delhi
                        </option>
                        <option>
                          University School of Information, Communication and
                          Technology - [USICT], New Delhi
                        </option>
                        <option>
                          University School of Law and Legal Studies - [USLLS],
                          New Delhi
                        </option>
                        <option>
                          University School of Management &amp;
                          Entrepreneurship, New Delhi
                        </option>
                        <option>
                          University School of Management Studies, Guru Gobind
                          Singh Indraprastha University - [USMS IPU], New Delhi
                        </option>
                        <option>
                          University of Delhi, Department of Financial Studies -
                          [DFS], New Delhi
                        </option>
                        <option>
                          VIIT College of Technology &amp; Management,
                          Bulandshahr
                        </option>
                        <option>VIIT Degree College, Bulandshahr</option>
                        <option>
                          VS Mehta College of Science (Bhavan's Mehta
                          Mahavidyalaya), Ghaziabad
                        </option>
                        <option>Vaish College of Education, Rohtak</option>
                        <option>Vaish College of Engineering, Rohtak</option>
                        <option>Vaish College of Law - [VCL], Rohtak</option>
                        <option>Vaish College, Rohtak</option>
                        <option>
                          Vaish Institute of Pharmaceutical Education and
                          Research, Rohtak
                        </option>
                        <option>Vaish Technical Institute [VTI], Rohtak</option>
                        <option>
                          Vallabhbhai Patel Chest Institute - [VPCI], New Delhi
                        </option>
                        <option>
                          Vardey Devi Institute of Engineering and Technology,
                          Jind
                        </option>
                        <option>
                          Vardhman Mahavir Medical College - [VMMC], New Delhi
                        </option>
                        <option>
                          Varun Dhaka Institute of Technology, New Delhi
                        </option>
                        <option>Vastu Kala Academy, New Delhi</option>
                        <option>
                          Vedant Institute of Management &amp; Technology -
                          [VIMT], Hapur
                        </option>
                        <option>Vedatya Institute, Gurgaon</option>
                        <option>
                          Vedica Scholars Programme for Women - [VSPW], New
                          Delhi
                        </option>
                        <option>
                          Venkateshwara College of Engineering, Meerut
                        </option>
                        <option>
                          Venkateshwara Institute of Technology, Meerut
                        </option>
                        <option>
                          Vidya Bhavan College of Education, Gurgaon
                        </option>
                        <option>
                          Vidya College of Engineering - [VCE], Meerut
                        </option>
                        <option>
                          Vidya Institute of Creative Teaching - [VICT], Meerut
                        </option>
                        <option>
                          Vidya Institute of Fashion Technology - [VIFT], Meerut
                        </option>
                        <option>Vidya Knowledge Park - [VKP], Meerut</option>
                        <option>Vidya School of Business, Meerut</option>
                        <option>
                          Vidyarthi Institute of Technology, Meerut
                        </option>
                        <option>
                          Vidyavati Mukand Lal Girls College, Ghaziabad
                        </option>
                        <option>
                          Vikramaditya College of Education - [VCE], Rohtak
                        </option>
                        <option>
                          Vinayaka Institution of Management and Technology -
                          [VIMT], New Delhi
                        </option>
                        <option>
                          Virohan Institute of Health &amp; Management Science -
                          [VIHMS], Faridabad
                        </option>
                        <option>
                          Virohan Institute of Health and Management Sciences -
                          [VIHMS], Meerut
                        </option>
                        <option>
                          Virohan Institute of Health and Management Sciences -
                          [VIHMS], New Delhi
                        </option>
                        <option>
                          Vishveshwarya Group of Institutions - [VGI], Greater
                          Noida
                        </option>
                        <option>
                          Vision Institute of Advanced Studies, New Delhi
                        </option>
                        <option>
                          Vivekanand Institute of Technology and Science -
                          [VITS], Ghaziabad
                        </option>
                        <option>
                          Vivekanand School of Journalism and Mass Communication
                          - [VSJMC], New Delhi
                        </option>
                        <option>Vivekananda College, New Delhi</option>
                        <option>
                          Vivekananda Institute of Mass Communication - [VIMC],
                          New Delhi
                        </option>
                        <option>
                          Vivekananda Institute of Professional Studies -
                          [VIPS], New Delhi
                        </option>
                        <option>WLCI, New Delhi</option>
                        <option>Warlord Aviation, New Delhi</option>
                        <option>
                          WedCell Institute of Event Management, New Delhi
                        </option>
                        <option>
                          Wedding Management Institute - [WMI], New Delhi
                        </option>
                        <option>
                          Westford International College, New Delhi
                        </option>
                        <option>
                          World College of Technology and Management - [WCTM],
                          Gurgaon
                        </option>
                        <option>
                          World Institute of Technology - [WIT], Gurgaon
                        </option>
                        <option>
                          World University of Design - [WUD], Sonepat
                        </option>
                        <option>
                          Xavier Institute of Management &amp; Design - [XIMD],
                          Gautam Budh Nagar
                        </option>
                        <option>
                          YMCA Institute for Fashion Technology &amp; Design -
                          [IFTD], New Delhi
                        </option>
                        <option>
                          YMCA Institute for Media Studies and Information
                          Technology, New Delhi
                        </option>
                        <option>
                          YMCA Institute for Office Management - [IOM], New
                          Delhi
                        </option>
                        <option>
                          YMCA Institute of Management Studies - [IMS], New
                          Delhi
                        </option>
                        <option>YMCA, New Delhi</option>
                        <option>Zakir Husain College, New Delhi</option>
                        <option>
                          Zakir Husain Delhi College (Evening), New Delhi
                        </option>
                        <option>
                          Zee Institute of Creative Art- [ZICA], Noida
                        </option>
                        <option>
                          École Intuit Lab - French Institute of Design, Digital
                          &amp; Strategy, New Delhi
                        </option>
                      </datalist>
                    </div>
                  </fieldset>
                </div>
                <div class="row ">
                  <fieldset className="pure-group" class="col-md-6">
                    <div class="container">
                      <label htmlFor="Stream" data-aos="fade-up">
                        Stream*:
                      </label>
                      <br />
                      <select name="Stream" id="Stream" required>
                        <option disabled="" selected="" value="">
                          {" "}
                          -- select an option --{" "}
                        </option>
                        <option>Arts</option>
                        <option>Commerce</option>
                        <option>Design</option>
                        <option>Engineering</option>
                        <option>Medical</option>
                        <option>Management</option>
                        <option>Natural</option>
                        <option>Sciences</option>
                        <option>Pharmacy</option>
                        <option>Science</option>
                        <option>Computer</option>
                        <option>Applications</option>
                        <option>Law</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </fieldset>
                  <fieldset className="pure-group" class="col-md-6">
                    <div class="container">
                      <label htmlFor="Year" data-aos="fade-up">
                        Year of study*:
                      </label>
                      <br />
                      <select name="Year" id="Year" required>
                        <option disabled="" selected="" value="">
                          {" "}
                          -- select an option --{" "}
                        </option>
                        <option>1st year</option>
                        <option> 2nd year</option>
                        <option> 3rd year</option>
                        <option> 4th year</option>
                        <option> 5th year</option>
                        <option> Other</option>
                      </select>
                    </div>
                  </fieldset>
                </div>
                <br />
                <br />
                <fieldset className="pure-group" class="col-md-12">
                  <div class="container">
                    <label htmlFor="Motivation" data-aos="fade-up">
                      What is your motivation to join the program?*
                    </label>
                    <br />
                    <textarea
                      id="Motivation"
                      name="Motivation"
                      data-aos="fade-up"
                      required
                      defaultValue={""}
                    />
                  </div>
                </fieldset>
                <br />
                <br />
                <br />
                <div class="row">
                  <fieldset className="pure-group" class="col-md-4">
                    <div class="container">
                      <label htmlFor="Instagram" data-aos="fade-up">
                        Instagram Profile Link*:
                      </label>
                      <br />
                      <input
                        type="text"
                        id="Instagram"
                        name="Instagram"
                        data-aos="fade-up"
                        required
                      />
                    </div>
                  </fieldset>
                  <fieldset className="pure-group" class="col-md-4 ">
                    <div class="container">
                      <label htmlFor="Linkedin" data-aos="fade-up">
                        Linkedin Profile Link:
                      </label>
                      <br />
                      <input
                        type="text"
                        id="Linkedin"
                        name="Linkedin"
                        data-aos="fade-up"
                      />
                    </div>
                  </fieldset>
                  <br />
                  <br />
                  <br />
                  <fieldset className="pure-group" class="col-md-4 ">
                    <div class="container">
                      <label htmlFor="Facebook" data-aos="fade-up">
                        Facebook Profile Link:
                      </label>
                      <br />
                      <input
                        type="text"
                        id="Facebook"
                        name="Facebook"
                        data-aos="fade-up"
                      />
                    </div>
                  </fieldset>
                  <br />
                  <fieldset style={{ placeItems: "center" }}>
                    <input
                      className="formSub"
                      type="Submit"
                      defaultValue="Register"
                      id="sub"
                    />
                    <br />
                  </fieldset>
                  <br />
                  <br />
                  <br />
                </div>
                <fieldset style={{ placeItems: "center" }}>
                  <input
                    className="formSub"
                    type="Submit"
                    defaultValue="Registeration is Closed"
                    id="sub"
                    diasbled
                  />
                </fieldset>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}
