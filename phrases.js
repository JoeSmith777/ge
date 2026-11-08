// Format: ["Englisch bzw. Pinyin (Zeichen)", "Deutsch", "Kategorie", "Tipp (optional)"]
// 100 × Schule (50 Schülersicht, 50 Lehrersicht) · 100 × Alltag · 50 × Taiwan · 50 × Mandarin
const PHRASES = [

  // =====================================================================
  // ===================== SCHULE – SCHÜLERSICHT (50) =====================
  // =====================================================================

  // --- Erster Schultag & Orientierung (1–5) ---
  ["I'm an exchange student from Germany.", "Ich bin Austauschschüler(in) aus Deutschland.", "Schule", ""],
  ["Hi, I'm new here. My name is …", "Hallo, ich bin neu hier. Ich heiße …", "Schule", ""],
  ["Where is the main office?", "Wo ist das Sekretariat?", "Schule", ""],
  ["Is this seat free?", "Ist dieser Platz frei?", "Schule", ""],
  ["Who is our homeroom teacher?", "Wer ist unser(e) Klassenlehrer(in)?", "Schule", "Die Klassenlehrkraft ist in Taiwan oft die wichtigste Bezugsperson."],

  // --- Im Unterricht verstehen (6–10) ---
  ["Could you repeat that, please?", "Könnten Sie das bitte wiederholen?", "Schule", "Sehr nützlich, wenn Lehrkräfte schnell sprechen."],
  ["Could you speak a bit more slowly, please?", "Könnten Sie bitte etwas langsamer sprechen?", "Schule", ""],
  ["What does this word mean?", "Was bedeutet dieses Wort?", "Schule", ""],
  ["Which page are we on?", "Auf welcher Seite sind wir?", "Schule", ""],
  ["Could you explain that again in English?", "Könnten Sie das noch einmal auf Englisch erklären?", "Schule", "Viele Fächer werden auf Mandarin unterrichtet. Frag freundlich nach."],

  // --- Fragen & Bitten an Lehrkräfte (11–15) ---
  ["Excuse me, may I ask a question?", "Entschuldigung, darf ich eine Frage stellen?", "Schule", ""],
  ["May I go to the restroom?", "Darf ich auf die Toilette gehen?", "Schule", "'restroom' klingt höflicher als 'toilet'."],
  ["Could you help me with this exercise?", "Könnten Sie mir bei dieser Aufgabe helfen?", "Schule", ""],
  ["Can I use my phone to translate?", "Darf ich mein Handy zum Übersetzen benutzen?", "Schule", "Handys sind im Unterricht oft verboten. Immer vorher fragen."],
  ["Sorry I'm late.", "Entschuldigung, dass ich zu spät bin.", "Schule", "Pünktlichkeit ist an taiwanischen Schulen sehr wichtig."],

  // --- Hausaufgaben & Prüfungen (16–20) ---
  ["What is the homework for tomorrow?", "Was sind die Hausaufgaben für morgen?", "Schule", ""],
  ["When is the homework due?", "Bis wann muss die Hausaufgabe abgegeben werden?", "Schule", "'due' = fällig."],
  ["I'm sorry, I forgot my homework.", "Entschuldigung, ich habe meine Hausaufgaben vergessen.", "Schule", ""],
  ["When is the next test?", "Wann ist der nächste Test?", "Schule", ""],
  ["Do I have to take the test as an exchange student?", "Muss ich als Austauschschüler(in) den Test mitschreiben?", "Schule", ""],

  // --- Gruppenarbeit (21–25) ---
  ["Can I join your group?", "Kann ich bei eurer Gruppe mitmachen?", "Schule", ""],
  ["What should I do?", "Was soll ich machen?", "Schule", ""],
  ["What do you think about this idea?", "Was haltet ihr von dieser Idee?", "Schule", ""],
  ["I see your point, but I think …", "Ich verstehe deinen Punkt, aber ich denke …", "Schule", "Höflich widersprechen: erst anerkennen, dann die eigene Meinung."],
  ["Who is going to present?", "Wer wird präsentieren?", "Schule", ""],

  // --- Mitschüler kennenlernen (26–30) ---
  ["Do you have an English name?", "Hast du einen englischen Namen?", "Schule", "Viele Taiwaner haben zusätzlich einen englischen Vornamen."],
  ["How do you pronounce your name?", "Wie spricht man deinen Namen aus?", "Schule", "Zeigt Respekt. Übe die Aussprache ruhig ein paar Mal."],
  ["What's your favorite subject?", "Was ist dein Lieblingsfach?", "Schule", ""],
  ["Can I add you on LINE?", "Kann ich dich auf LINE hinzufügen?", "Schule", "LINE ist in Taiwan die meistgenutzte Messenger-App."],
  ["Let's stay in touch after the exchange.", "Lass uns nach dem Austausch in Kontakt bleiben.", "Schule", ""],

  // --- Pausen & Schulalltag (31–35) ---
  ["Where do we eat lunch?", "Wo essen wir zu Mittag?", "Schule", "Oft wird in Taiwan im Klassenzimmer gegessen."],
  ["Do we have a nap after lunch?", "Machen wir nach dem Mittagessen einen Mittagsschlaf?", "Schule", "Die Mittagsruhe (午休 wǔxiū) mit Kopf auf dem Tisch ist an vielen Schulen üblich."],
  ["Is it my turn to clean the classroom?", "Bin ich dran, das Klassenzimmer zu putzen?", "Schule", "Schüler putzen in Taiwan ihre Klassenräume selbst."],
  ["What time does school finish today?", "Wann ist heute Schulschluss?", "Schule", "Schultage gehen oft bis 16 oder 17 Uhr."],
  ["Do you go to cram school after class?", "Gehst du nach dem Unterricht zur Nachhilfeschule?", "Schule", "Viele taiwanische Schüler besuchen abends eine Nachhilfeschule (補習班 bǔxíbān)."],

  // --- AGs, Sport & Ausflüge (36–40) ---
  ["Which clubs can I join?", "Welchen AGs kann ich beitreten?", "Schule", ""],
  ["I'd like to try the basketball club.", "Ich würde gerne die Basketball-AG ausprobieren.", "Schule", "Basketball und Baseball sind in Taiwan sehr beliebt."],
  ["Where do we change for PE?", "Wo ziehen wir uns für den Sportunterricht um?", "Schule", ""],
  ["When is sports day?", "Wann ist das Sportfest?", "Schule", ""],
  ["Where are we going on the field trip?", "Wohin geht der Ausflug?", "Schule", ""],

  // --- Organisation & Probleme (41–45) ---
  ["I left my textbook at home.", "Ich habe mein Schulbuch zu Hause vergessen.", "Schule", ""],
  ["Can I borrow a pen?", "Kann ich mir einen Stift leihen?", "Schule", ""],
  ["I don't feel well. Can I go to the nurse's office?", "Mir geht es nicht gut. Darf ich ins Krankenzimmer?", "Schule", ""],
  ["My host family will pick me up.", "Meine Gastfamilie holt mich ab.", "Schule", ""],
  ["Is class canceled today?", "Fällt der Unterricht heute aus?", "Schule", ""],

  // --- Präsentieren & Deutschland vorstellen (46–50) ---
  ["Today I'd like to tell you about my hometown.", "Heute möchte ich euch etwas über meine Heimatstadt erzählen.", "Schule", "Guter Einstieg für eine Präsentation."],
  ["In Germany, our school system is different.", "In Deutschland ist unser Schulsystem anders.", "Schule", "Gutes Gesprächsthema, Taiwaner sind oft neugierig."],
  ["Our grades go from one to six, and one is the best.", "Unsere Noten gehen von eins bis sechs, und eins ist die beste.", "Schule", "Für Taiwaner überraschend, dort gilt meist eine 100-Punkte-Skala."],
  ["Does anyone have any questions?", "Hat jemand Fragen?", "Schule", ""],
  ["Thank you for listening.", "Danke fürs Zuhören.", "Schule", ""],

  // =====================================================================
  // ===================== SCHULE – LEHRERSICHT (50) ======================
  // =====================================================================

  // --- Unterrichtsbeginn & Organisation (1–10) ---
  ["Good morning, everyone. Please sit down.", "Guten Morgen zusammen. Bitte setzt euch.", "Schule", "Lehrersicht: typischer Stundenbeginn."],
  ["Let's get started.", "Lasst uns anfangen.", "Schule", "Lehrersicht"],
  ["Who is absent today?", "Wer fehlt heute?", "Schule", "Lehrersicht"],
  ["Please take out your books.", "Bitte holt eure Bücher heraus.", "Schule", "Lehrersicht"],
  ["Open your books to page twenty.", "Schlagt eure Bücher auf Seite zwanzig auf.", "Schule", "Lehrersicht. Man sagt 'open to page …', nicht 'on page'."],
  ["Please put your phones away.", "Bitte legt eure Handys weg.", "Schule", "Lehrersicht"],
  ["Today we're going to talk about …", "Heute sprechen wir über …", "Schule", "Lehrersicht"],
  ["Let's welcome our guests from Germany.", "Lasst uns unsere Gäste aus Deutschland begrüßen.", "Schule", "Lehrersicht. Oft begrüßt die Klasse Gäste mit Applaus."],
  ["Please introduce yourself to the class.", "Bitte stell dich der Klasse vor.", "Schule", "Lehrersicht. Eine kurze Selbstvorstellung vorbereiten lohnt sich!"],
  ["Let's take a short break.", "Lasst uns eine kurze Pause machen.", "Schule", "Lehrersicht"],

  // --- Arbeitsanweisungen & Hausaufgaben (11–20) ---
  ["Work in pairs, please.", "Arbeitet bitte zu zweit.", "Schule", "Lehrersicht"],
  ["Get into groups of four.", "Bildet Vierergruppen.", "Schule", "Lehrersicht"],
  ["Read the text and answer the questions.", "Lest den Text und beantwortet die Fragen.", "Schule", "Lehrersicht"],
  ["You have ten minutes for this task.", "Ihr habt zehn Minuten für diese Aufgabe.", "Schule", "Lehrersicht"],
  ["Write down the new words in your notebook.", "Schreibt die neuen Wörter in euer Heft.", "Schule", "Lehrersicht. 'notebook' = Heft, nicht unbedingt Laptop."],
  ["Listen carefully and repeat after me.", "Hört genau zu und sprecht mir nach.", "Schule", "Lehrersicht"],
  ["Please hand in your homework.", "Gebt bitte eure Hausaufgaben ab.", "Schule", "Lehrersicht"],
  ["For homework, please finish the worksheet.", "Als Hausaufgabe macht bitte das Arbeitsblatt fertig.", "Schule", "Lehrersicht"],
  ["The test will be next Monday.", "Der Test ist nächsten Montag.", "Schule", "Lehrersicht"],
  ["Pass the worksheets to the back, please.", "Gebt die Arbeitsblätter bitte nach hinten durch.", "Schule", "Lehrersicht"],

  // --- Lob, Feedback & Ermutigung (21–30) ---
  ["Well done!", "Gut gemacht!", "Schule", "Lehrersicht"],
  ["Excellent work, keep it up!", "Hervorragende Arbeit, weiter so!", "Schule", "Lehrersicht"],
  ["That's a good question.", "Das ist eine gute Frage.", "Schule", "Lehrersicht"],
  ["Almost right. Try again.", "Fast richtig. Versuch es noch mal.", "Schule", "Lehrersicht"],
  ["Don't worry about making mistakes.", "Mach dir keine Sorgen wegen Fehlern.", "Schule", "Lehrersicht. Taiwanische Schüler sind im Unterricht oft eher zurückhaltend."],
  ["Can anyone help?", "Kann jemand helfen?", "Schule", "Lehrersicht"],
  ["Take your time.", "Lass dir Zeit.", "Schule", "Lehrersicht"],
  ["You've improved a lot.", "Du hast dich sehr verbessert.", "Schule", "Lehrersicht"],
  ["Speak up, please. I can't hear you.", "Sprich bitte lauter, ich kann dich nicht hören.", "Schule", "Lehrersicht"],
  ["Who would like to answer?", "Wer möchte antworten?", "Schule", "Lehrersicht"],

  // --- Klassenführung & Regeln (31–40) ---
  ["Quiet, please.", "Ruhe, bitte.", "Schule", "Lehrersicht"],
  ["Please pay attention.", "Bitte passt auf.", "Schule", "Lehrersicht"],
  ["Does everyone understand?", "Haben alle verstanden?", "Schule", "Lehrersicht"],
  ["Raise your hand if you have a question.", "Meldet euch, wenn ihr eine Frage habt.", "Schule", "Lehrersicht"],
  ["Please don't talk while others are speaking.", "Bitte redet nicht, wenn andere sprechen.", "Schule", "Lehrersicht"],
  ["Please speak English in class.", "Bitte sprecht im Unterricht Englisch.", "Schule", "Lehrersicht"],
  ["Line up at the door, please.", "Stellt euch bitte an der Tür auf.", "Schule", "Lehrersicht"],
  ["Please clean up before you leave.", "Bitte räumt auf, bevor ihr geht.", "Schule", "Lehrersicht"],
  ["Stay together and don't get lost.", "Bleibt zusammen und verlauft euch nicht.", "Schule", "Lehrersicht. Typisch bei Ausflügen."],
  ["We'll meet here again at three o'clock.", "Wir treffen uns um drei Uhr wieder hier.", "Schule", "Lehrersicht"],

  // --- Begleitlehrkraft & Kollegium (41–50) ---
  ["I'm the accompanying teacher from Germany.", "Ich bin die begleitende Lehrkraft aus Deutschland.", "Schule", "Lehrersicht"],
  ["I teach English and history.", "Ich unterrichte Englisch und Geschichte.", "Schule", "Lehrersicht"],
  ["Thank you for welcoming our students so warmly.", "Danke, dass Sie unsere Schüler so herzlich aufnehmen.", "Schule", "Lehrersicht"],
  ["Could I sit in on one of your classes?", "Dürfte ich in einer Ihrer Stunden hospitieren?", "Schule", "Lehrersicht. 'to sit in on' = hospitieren."],
  ["How many students are in a class here?", "Wie viele Schüler sind hier in einer Klasse?", "Schule", "Lehrersicht. Klassen mit über 30 Schülern sind in Taiwan üblich."],
  ["What does a typical school day look like here?", "Wie sieht hier ein typischer Schultag aus?", "Schule", "Lehrersicht"],
  ["Who should the students contact in an emergency?", "An wen sollen sich die Schüler im Notfall wenden?", "Schule", "Lehrersicht"],
  ["Please let me know if there are any problems.", "Bitte geben Sie mir Bescheid, wenn es Probleme gibt.", "Schule", "Lehrersicht"],
  ["Could we go over the schedule for tomorrow?", "Könnten wir den Ablauf für morgen durchgehen?", "Schule", "Lehrersicht"],
  ["We hope to welcome you in Germany next year.", "Wir hoffen, Sie nächstes Jahr in Deutschland begrüßen zu dürfen.", "Schule", "Lehrersicht. Ein kleines Gastgeschenk der Schule kommt gut an."],

  // =====================================================================
  // ============================ ALLTAG (100) ===========================
  // =====================================================================

  // --- Ankunft & Gastfamilie (1–10) ---
  ["Nice to meet you.", "Schön, dich/Sie kennenzulernen.", "Alltag", ""],
  ["Thank you for having me.", "Danke, dass ich bei euch sein darf.", "Alltag", "Der perfekte erste Satz gegenüber der Gastfamilie."],
  ["The flight was long, but I'm fine.", "Der Flug war lang, aber mir geht es gut.", "Alltag", ""],
  ["I'm a little jet-lagged.", "Ich habe ein bisschen Jetlag.", "Alltag", "Taiwan ist Deutschland 6 bzw. 7 Stunden voraus (je nach Sommer- oder Winterzeit)."],
  ["What should I call you?", "Wie soll ich euch/Sie nennen?", "Alltag", ""],
  ["Your home is very nice.", "Euer Zuhause ist sehr schön.", "Alltag", ""],
  ["Where can I put my suitcase?", "Wo kann ich meinen Koffer abstellen?", "Alltag", ""],
  ["Which room is mine?", "Welches Zimmer ist meins?", "Alltag", ""],
  ["Do you have any pets?", "Habt ihr Haustiere?", "Alltag", ""],
  ["Could I call my parents to tell them I've arrived?", "Könnte ich meine Eltern anrufen und ihnen sagen, dass ich angekommen bin?", "Alltag", ""],

  // --- Haushalt & Hausregeln (11–20) ---
  ["Are there any house rules I should know about?", "Gibt es Hausregeln, die ich kennen sollte?", "Alltag", "Am besten gleich am ersten Abend fragen."],
  ["What time should I be home in the evening?", "Um wie viel Uhr soll ich abends zu Hause sein?", "Alltag", ""],
  ["Is it okay if I take a shower now?", "Ist es in Ordnung, wenn ich jetzt dusche?", "Alltag", "In vielen Familien wird abends geduscht."],
  ["How does the hot water work?", "Wie funktioniert das warme Wasser?", "Alltag", ""],
  ["Could you show me how this works?", "Kannst du mir zeigen, wie das funktioniert?", "Alltag", ""],
  ["Where can I do my laundry?", "Wo kann ich meine Wäsche waschen?", "Alltag", ""],
  ["Can I use the air conditioner at night?", "Darf ich nachts die Klimaanlage benutzen?", "Alltag", ""],
  ["How do you separate the trash here?", "Wie trennt ihr hier den Müll?", "Alltag", ""],
  ["Can I help you with anything?", "Kann ich dir/Ihnen bei irgendetwas helfen?", "Alltag", ""],
  ["Let me do the dishes.", "Lass mich abwaschen.", "Alltag", "Mithelfen kommt in jeder Gastfamilie gut an."],

  // --- Essen am Tisch (21–30) ---
  ["What time do you usually have dinner?", "Wann esst ihr normalerweise zu Abend?", "Alltag", ""],
  ["It smells wonderful!", "Das riecht wunderbar!", "Alltag", ""],
  ["What is this called?", "Wie heißt das?", "Alltag", ""],
  ["What's in it?", "Was ist da drin?", "Alltag", ""],
  ["Could I have a little more, please?", "Könnte ich bitte noch etwas mehr haben?", "Alltag", ""],
  ["I'm full, thank you. It was delicious.", "Ich bin satt, danke. Es war köstlich.", "Alltag", ""],
  ["I'm allergic to nuts.", "Ich bin allergisch gegen Nüsse.", "Alltag", "Wichtig: Allergien früh der Gastfamilie mitteilen."],
  ["I don't eat pork.", "Ich esse kein Schweinefleisch.", "Alltag", ""],
  ["I'll try a little bit.", "Ich probiere ein kleines bisschen.", "Alltag", "Höflich, wenn dir etwas unbekannt ist."],
  ["Could you pass me the soy sauce, please?", "Könntest du mir bitte die Sojasoße reichen?", "Alltag", ""],

  // --- Gefühle & Small Talk (31–40) ---
  ["How are you today?", "Wie geht es dir heute?", "Alltag", ""],
  ["I'm doing great, thanks. And you?", "Mir geht es super, danke. Und dir?", "Alltag", ""],
  ["I'm a bit tired. I think I'll go to bed.", "Ich bin etwas müde. Ich glaube, ich gehe ins Bett.", "Alltag", ""],
  ["I'm a little homesick today.", "Ich habe heute ein bisschen Heimweh.", "Alltag", "Völlig normal. Darüber zu sprechen hilft."],
  ["I'm really enjoying my time here.", "Ich genieße meine Zeit hier wirklich.", "Alltag", ""],
  ["That's so interesting!", "Das ist so interessant!", "Alltag", ""],
  ["Really? I didn't know that.", "Wirklich? Das wusste ich nicht.", "Alltag", ""],
  ["What do you like to do in your free time?", "Was machst du gern in deiner Freizeit?", "Alltag", ""],
  ["What kind of music do you listen to?", "Welche Musik hörst du?", "Alltag", ""],
  ["Have you ever been to Europe?", "Warst du schon mal in Europa?", "Alltag", ""],

  // --- Freizeit & Verabredungen (41–50) ---
  ["Do you have any plans for the weekend?", "Hast du Pläne fürs Wochenende?", "Alltag", ""],
  ["Would you like to go to the cinema?", "Möchtest du ins Kino gehen?", "Alltag", ""],
  ["That sounds great!", "Das klingt toll!", "Alltag", ""],
  ["Sorry, I can't make it today.", "Tut mir leid, heute schaffe ich es nicht.", "Alltag", ""],
  ["What time shall we meet?", "Um wie viel Uhr treffen wir uns?", "Alltag", ""],
  ["Let's meet in front of the station.", "Lass uns vor dem Bahnhof treffen.", "Alltag", ""],
  ["I'm on my way.", "Ich bin unterwegs.", "Alltag", ""],
  ["Sorry, I'm running a few minutes late.", "Sorry, ich verspäte mich ein paar Minuten.", "Alltag", ""],
  ["Could you take a photo of us?", "Könntest du ein Foto von uns machen?", "Alltag", ""],
  ["I had a great time today.", "Ich hatte heute eine tolle Zeit.", "Alltag", ""],

  // --- Einkaufen (51–60) ---
  ["How much does this cost?", "Wie viel kostet das?", "Alltag", ""],
  ["Do you have this in a bigger size?", "Haben Sie das eine Nummer größer?", "Alltag", ""],
  ["Can I try this on?", "Kann ich das anprobieren?", "Alltag", ""],
  ["I'm just looking, thank you.", "Ich schaue nur, danke.", "Alltag", ""],
  ["Can I pay by card?", "Kann ich mit Karte zahlen?", "Alltag", "Kleine Stände nehmen oft nur Bargeld."],
  ["Do you have a bag?", "Haben Sie eine Tüte?", "Alltag", "Plastiktüten kosten in Taiwan meist extra."],
  ["I'd like to buy a SIM card.", "Ich möchte eine SIM-Karte kaufen.", "Alltag", ""],
  ["Where can I exchange money?", "Wo kann ich Geld wechseln?", "Alltag", ""],
  ["Is there an ATM nearby?", "Gibt es hier in der Nähe einen Geldautomaten?", "Alltag", ""],
  ["Could I have the receipt, please?", "Könnte ich bitte den Kassenbon haben?", "Alltag", ""],

  // --- Unterwegs & nach dem Weg fragen (61–70) ---
  ["Excuse me, how do I get to the station?", "Entschuldigung, wie komme ich zum Bahnhof?", "Alltag", ""],
  ["Is it far from here?", "Ist es weit von hier?", "Alltag", ""],
  ["Can I walk there?", "Kann ich dorthin laufen?", "Alltag", ""],
  ["Which bus goes to the city center?", "Welcher Bus fährt ins Stadtzentrum?", "Alltag", ""],
  ["Where is the nearest MRT station?", "Wo ist die nächste MRT-Station?", "Alltag", "MRT = U-Bahn in Taipeh, Kaohsiung und Taichung."],
  ["Does this train stop at …?", "Hält dieser Zug in …?", "Alltag", ""],
  ["Could you show me on the map?", "Könntest du es mir auf der Karte zeigen?", "Alltag", ""],
  ["I think I'm lost.", "Ich glaube, ich habe mich verlaufen.", "Alltag", ""],
  ["Turn left at the traffic lights.", "Biegen Sie an der Ampel links ab.", "Alltag", ""],
  ["Go straight ahead for about five minutes.", "Gehen Sie etwa fünf Minuten geradeaus.", "Alltag", ""],

  // --- Gesundheit & Notfälle (71–80) ---
  ["I'm not feeling well.", "Mir geht es nicht gut.", "Alltag", ""],
  ["I have a headache.", "Ich habe Kopfschmerzen.", "Alltag", ""],
  ["I have a stomachache.", "Ich habe Bauchschmerzen.", "Alltag", ""],
  ["I think I have a fever.", "Ich glaube, ich habe Fieber.", "Alltag", ""],
  ["Is there a pharmacy nearby?", "Gibt es eine Apotheke in der Nähe?", "Alltag", ""],
  ["I need to see a doctor.", "Ich muss zum Arzt.", "Alltag", ""],
  ["I take this medicine every day.", "Ich nehme dieses Medikament jeden Tag.", "Alltag", ""],
  ["I lost my wallet.", "Ich habe mein Portemonnaie verloren.", "Alltag", ""],
  ["Please call an ambulance!", "Bitte rufen Sie einen Krankenwagen!", "Alltag", "Notrufnummern in Taiwan: 119 (Rettung/Feuerwehr), 110 (Polizei)."],
  ["Help! I need help!", "Hilfe! Ich brauche Hilfe!", "Alltag", ""],

  // --- Telefon, Technik & Kommunikation (81–90) ---
  ["What's the Wi-Fi password?", "Wie lautet das WLAN-Passwort?", "Alltag", "Auf Englisch heißt es 'Wi-Fi', nicht 'WLAN'."],
  ["My phone battery is almost dead.", "Mein Handyakku ist fast leer.", "Alltag", ""],
  ["Can I charge my phone here?", "Kann ich hier mein Handy aufladen?", "Alltag", ""],
  ["Do you have an adapter for German plugs?", "Hast du einen Adapter für deutsche Stecker?", "Alltag", "Taiwan nutzt 110 V und flache Stecker (Typ A/B). Adapter mitbringen!"],
  ["I'll text you later.", "Ich schreibe dir später.", "Alltag", ""],
  ["Can you send me the address?", "Kannst du mir die Adresse schicken?", "Alltag", ""],
  ["I'll call you when I arrive.", "Ich rufe dich an, wenn ich ankomme.", "Alltag", ""],
  ["Sorry, the connection is bad.", "Entschuldigung, die Verbindung ist schlecht.", "Alltag", ""],
  ["Can I video call my family tonight?", "Kann ich heute Abend mit meiner Familie videotelefonieren?", "Alltag", ""],
  ["Could you send me the photos?", "Könntest du mir die Fotos schicken?", "Alltag", ""],

  // --- Höflichkeit, Missverständnisse & Abschied (91–100) ---
  ["I'm sorry, I don't understand.", "Entschuldigung, ich verstehe nicht.", "Alltag", ""],
  ["What do you mean?", "Was meinst du?", "Alltag", ""],
  ["Sorry, I didn't mean to be rude.", "Entschuldigung, ich wollte nicht unhöflich sein.", "Alltag", ""],
  ["No problem at all.", "Überhaupt kein Problem.", "Alltag", ""],
  ["Don't worry about it.", "Mach dir keine Sorgen.", "Alltag", ""],
  ["That's very kind of you.", "Das ist sehr nett von dir/Ihnen.", "Alltag", ""],
  ["I really appreciate it.", "Ich weiß das sehr zu schätzen.", "Alltag", ""],
  ["You're welcome.", "Gern geschehen.", "Alltag", ""],
  ["Thank you for everything.", "Danke für alles.", "Alltag", ""],
  ["You're always welcome to visit me in Germany.", "Ihr seid jederzeit willkommen, mich in Deutschland zu besuchen.", "Alltag", ""],

  // =====================================================================
  // ============================ TAIWAN (50) ============================
  // =====================================================================

  // --- Essen & Nachtmarkt (1–10) ---
  ["Let's go to the night market!", "Lass uns zum Nachtmarkt gehen!", "Taiwan", "Nachtmärkte wie Shilin oder Raohe sind Pflichtprogramm."],
  ["I'd like to try bubble tea.", "Ich möchte Bubble Tea probieren.", "Taiwan", "Bubble Tea kommt ursprünglich aus Taiwan."],
  ["Less sugar and less ice, please.", "Bitte weniger Zucker und weniger Eis.", "Taiwan", "Typische Bestellung, z. B. 'half sugar, less ice'."],
  ["Could you recommend some local food?", "Kannst du mir einheimisches Essen empfehlen?", "Taiwan", ""],
  ["What's the most famous dish in Taiwan?", "Was ist das berühmteste Gericht in Taiwan?", "Taiwan", "Häufige Antwort: Rindfleischnudelsuppe (牛肉麵)."],
  ["Is stinky tofu really that smelly?", "Ist Stinktofu wirklich so stinkig?", "Taiwan", ""],
  ["It's not too spicy, is it?", "Das ist doch nicht zu scharf, oder?", "Taiwan", ""],
  ["This is delicious!", "Das ist köstlich!", "Taiwan", "Essen zu loben ist eines der besten Komplimente in Taiwan."],
  ["Can you teach me how to use chopsticks properly?", "Kannst du mir zeigen, wie man richtig mit Stäbchen isst?", "Taiwan", "Stäbchen nie senkrecht in den Reis stecken, das erinnert an Räucherstäbchen für Verstorbene."],
  ["Can I drink the tap water?", "Kann ich das Leitungswasser trinken?", "Taiwan", "Leitungswasser wird in Taiwan meist abgekocht oder gefiltert getrunken."],

  // --- Kultur & Etikette (11–20) ---
  ["This is a small gift from Germany.", "Das ist ein kleines Geschenk aus Deutschland.", "Taiwan", "Geschenke mit beiden Händen überreichen. Keine Uhren schenken, das bringt Unglück."],
  ["Should I take off my shoes?", "Soll ich meine Schuhe ausziehen?", "Taiwan", "In Wohnungen werden die Schuhe fast immer ausgezogen."],
  ["Is it polite to …?", "Ist es höflich, … zu …?", "Taiwan", "Nützliche Frage, um Fettnäpfchen zu vermeiden."],
  ["Is there anything I should avoid doing here?", "Gibt es etwas, das ich hier vermeiden sollte?", "Taiwan", ""],
  ["Why is the number four unlucky?", "Warum ist die Zahl vier eine Unglückszahl?", "Taiwan", "'Vier' (sì) klingt ähnlich wie 'Tod' (sǐ). Manche Gebäude haben keinen 4. Stock."],
  ["Should I give it with both hands?", "Soll ich es mit beiden Händen überreichen?", "Taiwan", "Gilt auch für Visitenkarten und Geld."],
  ["Who should start eating first?", "Wer sollte zuerst anfangen zu essen?", "Taiwan", "Oft beginnen die Älteren zuerst. Respekt vor dem Alter ist wichtig."],
  ["How should I greet your grandparents?", "Wie soll ich deine Großeltern begrüßen?", "Taiwan", ""],
  ["Is it okay to write names in red ink?", "Ist es in Ordnung, Namen mit roter Tinte zu schreiben?", "Taiwan", "Lieber nicht, rote Namen werden mit Tod assoziiert."],
  ["Why does the garbage truck play music?", "Warum spielt der Müllwagen Musik?", "Taiwan", "Der Müllwagen spielt z. B. 'Für Elise', dann bringen alle ihren Müll raus."],

  // --- Feste & Religion (21–30) ---
  ["What does this festival celebrate?", "Was wird bei diesem Fest gefeiert?", "Taiwan", ""],
  ["How do you celebrate Lunar New Year?", "Wie feiert ihr das Mondneujahr?", "Taiwan", "Das wichtigste Familienfest, meist im Januar oder Februar."],
  ["Why are red envelopes given at New Year?", "Warum verschenkt man zu Neujahr rote Umschläge?", "Taiwan", "Rot steht für Glück. Im Umschlag ist Geld."],
  ["Can I light a sky lantern?", "Kann ich eine Himmelslaterne steigen lassen?", "Taiwan", "Bekannt dafür ist Pingxi, besonders zum Laternenfest."],
  ["We eat mooncakes at the Mid-Autumn Festival, right?", "Zum Mondfest isst man Mondkuchen, oder?", "Taiwan", "In Taiwan wird dazu auch gern gegrillt (BBQ)."],
  ["Can we watch the dragon boat races?", "Können wir uns die Drachenbootrennen ansehen?", "Taiwan", ""],
  ["Is it okay to take pictures inside the temple?", "Darf man im Tempel fotografieren?", "Taiwan", "Immer vorher fragen und Betende nicht stören."],
  ["How do I pray at a temple?", "Wie bete ich in einem Tempel?", "Taiwan", ""],
  ["Who is the goddess Mazu?", "Wer ist die Göttin Mazu?", "Taiwan", "Mazu ist die Schutzgöttin der Seefahrer und eine der beliebtesten Gottheiten Taiwans."],
  ["What is Ghost Month?", "Was ist der Geistermonat?", "Taiwan", "Im 7. Mondmonat meiden viele Menschen z. B. Schwimmen oder Umzüge."],

  // --- Reisen, Sehenswürdigkeiten & Verkehr (31–40) ---
  ["I'd love to see Taipei 101.", "Ich würde gern Taipei 101 sehen.", "Taiwan", ""],
  ["Have you ever been to Taroko Gorge?", "Warst du schon einmal in der Taroko-Schlucht?", "Taiwan", ""],
  ["Is Sun Moon Lake worth visiting?", "Lohnt sich ein Besuch am Sonne-Mond-See?", "Taiwan", ""],
  ["Jiufen looks like a scene from a movie.", "Jiufen sieht aus wie eine Filmszene.", "Taiwan", ""],
  ["Can we go to a hot spring in Beitou?", "Können wir in Beitou in eine heiße Quelle gehen?", "Taiwan", ""],
  ["How do I top up my EasyCard?", "Wie lade ich meine EasyCard auf?", "Taiwan", "Die EasyCard funktioniert für MRT, Bus, YouBike und in Convenience Stores."],
  ["Is there a convenience store nearby?", "Gibt es hier in der Nähe einen Convenience Store?", "Taiwan", "7-Eleven und FamilyMart findet man fast überall."],
  ["Can I rent a YouBike here?", "Kann ich hier ein YouBike leihen?", "Taiwan", "YouBike ist das öffentliche Leihradsystem."],
  ["How long does the high-speed rail take to Kaohsiung?", "Wie lange braucht der Schnellzug nach Kaohsiung?", "Taiwan", "Von Taipeh etwa 1,5 bis 2 Stunden."],
  ["Why can't I eat or drink on the MRT?", "Warum darf man in der MRT nicht essen oder trinken?", "Taiwan", "Essen, Trinken und Kaugummi sind verboten, es drohen Geldstrafen."],

  // --- Sprache, Wetter & Gesellschaft (41–50) ---
  ["Can you teach me some Chinese words?", "Kannst du mir ein paar chinesische Wörter beibringen?", "Taiwan", "In Taiwan nutzt man traditionelle Schriftzeichen."],
  ["How do you say 'thank you' in Mandarin?", "Wie sagt man 'danke' auf Mandarin?", "Taiwan", "謝謝 = xièxie."],
  ["Do you also speak Taiwanese at home?", "Sprecht ihr zu Hause auch Taiwanisch?", "Taiwan", "Viele Familien sprechen neben Mandarin auch Taiwanisch (Hokkien)."],
  ["Is it always this hot and humid?", "Ist es immer so heiß und schwül?", "Taiwan", ""],
  ["Is it going to rain today? I need an umbrella.", "Wird es heute regnen? Ich brauche einen Regenschirm.", "Taiwan", "Subtropisches Klima mit häufigen kurzen Schauern."],
  ["What should I do if there's a typhoon?", "Was soll ich bei einem Taifun tun?", "Taiwan", "Bei Taifunen fällt oft die Schule aus ('typhoon day')."],
  ["What should I do during an earthquake?", "Was soll ich bei einem Erdbeben tun?", "Taiwan", "Drop, cover, hold on: hinknien, unter den Tisch, festhalten."],
  ["There are so many scooters here!", "Hier gibt es so viele Motorroller!", "Taiwan", "Beim Überqueren der Straße besonders aufpassen."],
  ["People in Taiwan are so friendly and helpful.", "Die Menschen in Taiwan sind so freundlich und hilfsbereit.", "Taiwan", ""],
  ["Thank you so much. I'll miss you all.", "Vielen Dank. Ich werde euch alle vermissen.", "Taiwan", "Für den Abschied von Gastfamilie und Klasse."],

  // =====================================================================
  // ======================= MANDARIN – GRUNDWORTSCHATZ (50) =============
  // =====================================================================
  // Format: "Pinyin (Zeichen)". Im Schreibmodus nur das Pinyin eingeben,
  // Tonzeichen dürfen weggelassen werden (xiexie = xièxie).

  // --- Begrüßung & Höflichkeit (1–12) ---
  ["nǐ hǎo (你好)", "Hallo", "Mandarin", "Wörtlich: 'du gut'. Die universelle Begrüßung."],
  ["xièxie (謝謝)", "Danke", "Mandarin", "Das zweite 'xie' wird tonlos und kurz gesprochen."],
  ["bú kèqi (不客氣)", "Gern geschehen", "Mandarin", ""],
  ["duìbuqǐ (對不起)", "Tut mir leid", "Mandarin", "Für echte Entschuldigungen."],
  ["bù hǎoyìsi (不好意思)", "Entschuldigung (Verzeihung)", "Mandarin", "Sehr häufig in Taiwan, z. B. um jemanden anzusprechen oder sich vorbeizudrängeln."],
  ["méi guānxi (沒關係)", "Macht nichts", "Mandarin", "Typische Antwort auf duìbuqǐ."],
  ["zàijiàn (再見)", "Auf Wiedersehen", "Mandarin", "Junge Leute sagen auch einfach 'bye bye'."],
  ["zǎo ān (早安)", "Guten Morgen", "Mandarin", ""],
  ["wǎn ān (晚安)", "Gute Nacht", "Mandarin", ""],
  ["qǐng (請)", "Bitte (bei einer Aufforderung)", "Mandarin", "Steht vor dem Verb: qǐng zuò = Bitte setzen Sie sich."],
  ["duì (對)", "Richtig / Ja, genau", "Mandarin", ""],
  ["bú shì (不是)", "Nein, ist es nicht", "Mandarin", "Ein einzelnes Wort für 'nein' gibt es im Chinesischen nicht."],

  // --- Sich vorstellen & Small Talk (13–20) ---
  ["wǒ jiào … (我叫…)", "Ich heiße …", "Mandarin", ""],
  ["nǐ jiào shénme míngzi? (你叫什麼名字？)", "Wie heißt du?", "Mandarin", ""],
  ["wǒ shì Déguó rén (我是德國人)", "Ich bin Deutsche(r)", "Mandarin", "Déguó = Deutschland, wörtlich 'Land der Tugend'."],
  ["hěn gāoxìng rènshi nǐ (很高興認識你)", "Freut mich, dich kennenzulernen", "Mandarin", ""],
  ["nǐ hǎo ma? (你好嗎？)", "Wie geht es dir?", "Mandarin", "'ma' am Satzende macht aus einer Aussage eine Ja/Nein-Frage."],
  ["wǒ hěn hǎo (我很好)", "Mir geht es gut", "Mandarin", ""],
  ["nǐ chī bǎo le ma? (你吃飽了嗎？)", "Hast du schon gegessen?", "Mandarin", "Wird auch als freundlicher Gruß verwendet, besonders von Älteren."],
  ["Jiāyóu! (加油！)", "Du schaffst das! / Gib Gas!", "Mandarin", "Wörtlich 'Öl nachfüllen'. Hört man beim Sport und vor Prüfungen."],

  // --- Verständigung (21–26) ---
  ["wǒ tīng bù dǒng (我聽不懂)", "Ich verstehe nicht (akustisch)", "Mandarin", ""],
  ["qǐng zài shuō yí cì (請再說一次)", "Bitte sag das noch einmal", "Mandarin", ""],
  ["qǐng shuō màn yìdiǎn (請說慢一點)", "Bitte sprich etwas langsamer", "Mandarin", ""],
  ["wǒ bú huì shuō Zhōngwén (我不會說中文)", "Ich kann kein Chinesisch", "Mandarin", "Gesagt mit gutem Akzent sorgt der Satz oft für Lacher."],
  ["zhège Zhōngwén zěnme shuō? (這個中文怎麼說？)", "Wie sagt man das auf Chinesisch?", "Mandarin", "Dabei auf den Gegenstand zeigen."],
  ["zhè shì shénme? (這是什麼？)", "Was ist das?", "Mandarin", ""],

  // --- Einkaufen & Essen (27–38) ---
  ["duōshǎo qián? (多少錢？)", "Wie viel kostet das?", "Mandarin", ""],
  ["tài guì le (太貴了)", "Das ist zu teuer", "Mandarin", "Auf Märkten kann man manchmal handeln, in Geschäften nicht."],
  ["wǒ yào zhège (我要這個)", "Ich möchte das hier", "Mandarin", "Zeigen und diesen Satz sagen: funktioniert immer."],
  ["bú yào, xièxie (不要，謝謝)", "Nein danke (brauche ich nicht)", "Mandarin", "Nützlich, wenn dir an der Kasse eine Tüte angeboten wird."],
  ["cèsuǒ zài nǎlǐ? (廁所在哪裡？)", "Wo ist die Toilette?", "Mandarin", ""],
  ["hǎo chī (好吃)", "Lecker", "Mandarin", "Das wichtigste Wort am Nachtmarkt!"],
  ["wǒ bù chī ròu (我不吃肉)", "Ich esse kein Fleisch", "Mandarin", "Vegetarisch = sù (素). Vegetarische Restaurants sind in Taiwan häufig."],
  ["bú yào là (不要辣)", "Bitte nicht scharf", "Mandarin", ""],
  ["wàidài (外帶)", "Zum Mitnehmen", "Mandarin", "Wird beim Bestellen fast immer gefragt."],
  ["nèiyòng (內用)", "Zum Hieressen", "Mandarin", "Gegenstück zu wàidài."],
  ["jiézhàng (結帳)", "Bezahlen, bitte", "Mandarin", "In vielen Lokalen zahlt man vorne an der Kasse."],
  ["yìqǐ chīfàn ba (一起吃飯吧)", "Lass uns zusammen essen", "Mandarin", "'ba' am Ende macht einen Vorschlag daraus."],

  // --- Zahlen & Zeit (39–43) ---
  ["yī, èr, sān (一、二、三)", "eins, zwei, drei", "Mandarin", ""],
  ["sì, wǔ, liù (四、五、六)", "vier, fünf, sechs", "Mandarin", "sì (4) klingt ähnlich wie sǐ (Tod), deshalb gilt die Vier als Unglückszahl."],
  ["qī, bā, jiǔ, shí (七、八、九、十)", "sieben, acht, neun, zehn", "Mandarin", "Die 8 (bā) gilt als Glückszahl."],
  ["jīntiān (今天)", "heute", "Mandarin", ""],
  ["míngtiān (明天)", "morgen", "Mandarin", ""],

  // --- Schule & Menschen (44–47) ---
  ["lǎoshī (老師)", "Lehrer(in)", "Mandarin", "Wird auch direkt als Anrede benutzt: 'Lǎoshī hǎo!' = Guten Tag, Lehrer(in)!"],
  ["tóngxué (同學)", "Mitschüler(in)", "Mandarin", "Lehrkräfte sprechen die Klasse oft mit 'tóngxuémen' an."],
  ["xuéxiào (學校)", "Schule", "Mandarin", ""],
  ["péngyou (朋友)", "Freund(in)", "Mandarin", ""],

  // --- Gefühle & Abschied (48–50) ---
  ["hěn piàoliang (很漂亮)", "Sehr schön / hübsch", "Mandarin", ""],
  ["wǒ ài Táiwān (我愛台灣)", "Ich liebe Taiwan", "Mandarin", "Kommt bei Gastgebern immer gut an."],
  ["yí lù shùn fēng (一路順風)", "Gute Reise", "Mandarin", "Wörtlich: 'den ganzen Weg Rückenwind'."]
];
