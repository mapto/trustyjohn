```mermaid
flowchart TD
	subgraph Onboarding
		0["<strong>narrator</strong>: Once upon a time there was an old king who was so\nill...<ins>Swipe card to make a choice...</ins>"] -->|"Could I do something?"| 200
		0 -->|"Is he going to get better?"| 200
		200["<strong>oldking</strong>: I am dying, Trusty John... You have served me so\nfaithfully for all my life<ins>Your decisions influence the scores you see\nabove</ins>"] -->|"What is going to happen to the kingdom"| 210
		200 -->|"Who's going to take care of me now?"| 210
		210["<strong>oldking</strong>: I could face my end without a care were it not for my\nson. He is still too young to decide everything for himself<ins>Keep the scores\nbalanced, don't let them grow or dwindle</ins>"] -->|"He shall be our new King"| 1
		210 -->|"He's a troublemaker"| 1
		1["<strong>oldking</strong>: Unless you promise me to instruct him in all he should\nknow, and to be to him as a father, I shall not close my eyes in peace<ins>Swipe\nright to continue...</ins>"] -->|"Uhmmm"| 2
		1 -->|"As you say, mylord"| 3
		2["<strong>oldking</strong>: You must promise me<ins>Swipe right to\ncontinue...</ins>"] -->|"Not sure"| 2
		2 -->|"Be assured, my king"| 3
	end
	subgraph Old_king
		3["<strong>oldking</strong>: Now I die comforted and in peace. After my death you\nmust show him the whole castle, all the rooms and apartments and vaults, and all\nthe treasures that lie in them"] -->|"So be it, your majesty"| 4
		3 -->|"You have my word, your highness"| 4
		4["<strong>oldking</strong>: but you must not show him the last room in the long\npassage, where the picture of the Princess of the Golden Roof is hidden. When he\nbeholds that picture he will fall violently in love with it and go off into a\ndead faint, and for her sake he will encounter many dangers; you must guard him\nfrom this"] -->|"I promise, mylord"| 5
		4 -->|"I will do as you say, my king"| 5
		5["<strong>narrator</strong>: the old man became silent, laid his head on the\npillow, and died."] -->|"Let him rest in peace"| 6
		5 -->|"It was an honour serving him. Long live his name"| 6
	end
	subgraph New_king
		6["<strong>narrator</strong>: When the old King had been carried to his grave and\nwhen the time of mourning was over"] -->|"It is time you should see your inheritance. I will show you your ancestral\ncastle"| 10
		6 -->|"I shall be faithful to you as I have been to him, even though it should cost me\nmy life"| 10
		10["<strong>newking</strong>: You take him over everything, and let him see all the\nriches and splendid apartments, only the one room where the picture was he did\nnot open. But the young King noticed that Trusty John always missed one door,\nand said: 'Why do you never open this one for me?'"] -->|"There is something inside that would appall you"| 11
		10 -->|"As you wish"| 16
		11["<strong>newking</strong>: I have seen the whole castle, and shall find out what\nis in there. I will force it open"] -->|"I promised your father before his death that you shouldn't see what that room\ncontains"| 12
		11 -->|"Okay"| 16
		12["<strong>newking</strong>: Ah! no, if I don't get in, it will be my certain\ndestruction; I should have no peace night or day till I had seen what was in the\nroom with my own eyes"] -->|"It might bring both you and me to great grief"| 14
		12 -->|"As you command"| 16
		14["<strong>newking</strong>: Now I don't budge from the spot till you have opened\nthe door."] -->|"With heavy heart I must do it"| 16
		14 -->|"I will do as you say"| 16
	end
	subgraph Secret_room
		16["<strong>narrator</strong>: Then you saw there was no way out of it, so with a\nheavy heart and many sighs you took the key from the big bunch..."] -->|"Just be careful, Mylord"| 17
		16 -->|"You have left me with no choice"| 17
		17["<strong>narrator</strong>: When you had opened the door you stepped in first,\nand thought to cover the likeness so that the King might not perceive it; but it\nwas hopeless...<ins>Sometimes all that remains to you is to let things go</ins>"] --> 18
		17 --> 18
		18["<strong>newking</strong>: The King stood on tiptoe and looked over his shoulder.\nAnd when he saw the picture of the maid, so beautiful and glittering with gold\nand precious stones, he fell swooning to the ground."] -->|"I will take care of it My King, just stay with me"| 19
		18 -->|"Wake up, Mylord, don't leave me alone"| 19
		19["<strong>newking</strong>: The King came to himself, but only after you poured\nwine down his throat"] -->|"Oh, My King, allow me to take care of you"| 20
		19 -->|"Thank God, everything is fine"| 20
		20["<strong>newking</strong>: Oh! who is the original of the beautiful picture?"] -->|"I have no idea"| 84
		20 -->|"She is the Princess of the Golden Roof"| 21
		21["<strong>newking</strong>: My love for her is so great that if all the leaves on\nthe trees had tongues they could not express it; my very life depends on my\nwinning her. You are my most trusty John: you must stand by me"] --> 22
		21 --> 22
	end
	subgraph Making_plan
		22["<strong>narrator</strong>: The faithful servant pondered long how they were to\nset about the matter, for it was said to be difficult even to get into the\npresence of the Princess."] -->|"You have in your treasure five tons of gold and the goldsmiths of your kingdom\nare skillful and famous"| 23
		22 -->|"All the things she has about her are made of gold. We shall bring to her your\ntreasures and try our luck with them"| 24
		23["<strong>newking</strong>: All the things she has about her are made of gold. I\ncan order my goldsmiths to make all manners of vases and vessels"] -->|"We shall bring to her your treasures and try our luck with them"| 25
		23 -->|"We shall bring to her your treasures and try to win her over with them"| 25
		24["<strong>newking</strong>: So she likes gold. I have five tons of gold and the\ngoldsmiths of my kingdom are legendary masters"] -->|"Let them the gold into all manner of vases and vessels"| 25
		24 -->|"Let them the gold into all sorts of birds and game and wonderful beasts"| 25
		25["<strong>newking</strong>: The King summoned all his goldsmiths, and they had to\nwork hard day and night, till at length the most magnificent things were\ncompleted."] --> 26
		25 --> 26
		26["<strong>narrator</strong>: When a ship had been laden with them the faithful\nJohn disguised himself as a merchant, and the King had to do the same, so that\nthey should be quite unrecognizable."] --> 27
		26 --> 27
		27["<strong>narrator</strong>: And so they crossed the seas and journeyed till they\nreached the town where the Princess of the Golden Roof dwelt."] -->|"Mylord, I will go for the princes, but you must wait on the ship"| 28
		27 -->|"Stay on the ship, My King, and await for my return"| 28
	end
	subgraph Ship_parts
		28["<strong>newking</strong>: Bring back the princess and I will let the gold\nornaments be arranged and the whole ship decorated"] -->|"I will take a few of the gold things in my apron, and proceed straight to the\npalace"| 30
		28 -->|"I will take some gold things straight to the palace"| 30
		30["<strong>narrator</strong>: When you came to the courtyard, there is a beautiful\nmaiden standing at the well, drawing water with two golden pails"] --> 31
		30 --> 31
		31["<strong>maiden</strong>: And as she was about to carry away the glittering water\nshe turned round and saw you with your gold and asked you who you were"] -->|"I'm a servant who has come to invite your Princess to my King"| 32
		31 -->|"I am a merchant"| 33
		33["<strong>maiden</strong>: Oh! my, what beautiful gold wares! Let me set down my\npails, and examine your gold items one thing after the other"] -->|"These are the goods I sell"| 34
		33 -->|"Let me show these goods to your Mistress"| 34
		34["<strong>maiden</strong>: The Princess must see this, she has such a fancy for\ngold things that she will buy up all you have"] -->|"Very well, take me to her "| 35
		34 -->|"It will be my pleasure to show them to her"| 35
		35["<strong>princess</strong>: They are all so beautifully made that I shall buy\neverything you have"] -->|"I am only the servant of a rich merchant, his merchandise is more artistic and\ncostly than anything that has ever been made in gold before"| 38
		35 -->|"What I have here is nothing compared to what my master has on his ship. There is\nsuch a quantity of things that they would take up so many rooms that you would\nhave no space for them in your house"| 38
		38["<strong>princess</strong>: Take me to your ship; I shall go there myself and\nview your master's treasures"] --> 39
		38 --> 39
	end
	subgraph Sail_back
		39["<strong>narrator</strong>: Then Trusty John was quite delighted, and brought her\nto the ship; and the King, when he beheld her, saw that she was even more\nbeautiful than her picture, and thought every moment that his heart would burst."] --> 40
		39 --> 40
		40["<strong>narrator</strong>: She stepped on to the ship, and the King led her\ninside. You John remained behind with the steersman, and ordered"] -->|"Push off the ship silently like a shadow in the night"| 43
		40 -->|"Spread all sail, that we may fly on the ocean like a bird in the air"| 43
		43["<strong>narrator</strong>: Meanwhile the King showed the Princess inside all his\ngold wares, every single bit of it--dishes, goblets, bowls, the birds and game,\nand all the wonderful beasts. Many hours passed thus, and she was so happy that\nshe did not notice that the ship was sailing away."] --> 44
		43 --> 44
		44["<strong>princess</strong>: After she had seen the last thing she thanked the\nmerchant and prepared to go home; but when she came to the ship's side she saw\nthat they were on the high seas, far from land, and that the ship was speeding\non its way under full canvas."] --> 45
		44 --> 45
		45["<strong>princess</strong>: Oh!, I am deceived, carried away and betrayed into\nthe power of a merchant; I would rather have died!"] --> 91
		45 --> 91
		91["<strong>newking</strong>: I am no merchant, but a king of as high birth as\nyourself; and it was my great love for you that made me carry you off by\nstratagem. The first time I saw your likeness I fell to the ground in a swoon."] --> 46
		91 --> 46
		46["<strong>princess</strong>: When the Princess of the Golden Roof heard this she\nwas comforted, and her heart went out to him, so that she willingly consented to\nbecome his wife."] --> 47
		46 --> 47
	end
	subgraph 3_ravens
		47["<strong>narrator</strong>: Now it happened one day, while they were sailing on\nthe high seas, that Trusty John, sitting on the forepart of the ship, fiddling\naway to himself, observed three ravens in the air flying toward him."] -->|"I will pretend that I don't notice them"| 49
		47 -->|"I'll hide and wait to see what they do"| 49
		49["<strong>ravens</strong>: Ah, ha! so he's bringing the Princess of the Golden\nRoof home<br/>Yes, but he's not got her yet<br/>Yes, he has, for she's sitting\nbeside him on the ship"] -->|"It's my imagination, ravens can't talk"| 48
		49 -->|"wait and listen"| 50
		50["<strong>ravens</strong>: That'll not help him! When they reach the land a\nchestnut horse will dash forward to greet them: the King will wish to mount it,\nand if he does it will gallop away with him, and disappear into the air, and he\nwill never see his bride again"] -->|"I'm not going to listen to some birds"| 48
		50 -->|"listen more"| 51
		51["<strong>ravens</strong>: Is there no escape for him?<br/>Oh! yes, if someone\nelse mounts quickly and shoots the horse dead with the pistol that is sticking\nin the holster, then the young King is saved. But who's to do that? And anyone\nwho knows it and tells him will be turned into stone from his feet to his knees"] -->|"This is all nonsense"| 48
		51 -->|"stand still and listen"| 52
		52["<strong>ravens</strong>: I know more than that: even if the horse is slain, the\nyoung King will still not keep his bride: when they enter the palace together\nthey will find a ready-made wedding shirt in a cupboard, which looks as though\nit were woven of gold and silver, but is really made of nothing but sulphur and\ntar: when the King puts it on it will burn him to his marrow and bones"] -->|"There's no way I believe this"| 48
		52 -->|"listen more"| 53
		53["<strong>ravens</strong>: Is there no way of escape, then?<br/>Oh! yes! If\nsomeone seizes the shirt with gloved hands and throws it into the fire, and lets\nit burn, then the young King is saved. But what's the good? Anyone knowing this\nand telling it will have half his body turned into stone, from his knees to his\nheart"] -->|"Even if it's true it seems to be endless"| 48
		53 -->|"wait more"| 54
		54["<strong>ravens</strong>: I know yet more: though the bridal shirt too be burnt,\nthe King hasn't even then secured his bride: when the dance is held after the\nwedding, and the young Queen is dancing, she will suddenly grow deadly white,\nand drop down like one dead, and unless..."] -->|"There's no hope in "| 48
		54 -->|"got to hear to the end"| 55
		55["<strong>ravens</strong>: someone lifts her up and draws three drops of blood\nfrom her right side, and spits them out again, she will die. But if anyone who\nknows this betrays it, he will be turned into stone from the crown of his head\nto the soles of his feet"] -->|"ravens, wait, tell me what to do?"| 56
		55 -->|"I need to think what to do"| 56
		56["<strong>narrator</strong>: When the ravens had thus conversed they fled onward,\nbut Trusty John had taken it all in, and was sad and depressed from that time\nforward; for if he were silent to his master concerning what he had heard, he\nwould involve him in misfortune; but if he took him into his confidence, then he\nhimself would forfeit his life."] -->|"Not sure what I can do"| 58
		56 -->|"I will stand by my master, though it should be my ruin"| 58
	end
	subgraph Interventions
		58["<strong>narrator</strong>: Now when they drew near the land it came to pass just\nas the ravens had predicted, and a splendid chestnut horse bounded forward."] --> 59
		58 --> 59
		59["<strong>newking</strong>: Capital! This animal shall carry me to my palace, I\nwill mount it"] -->|"seize the pistol out of the holster and shoot the horse dead"| 60
		59 -->|"take out the sword and cut the horse down"| 60
		60["<strong>servants</strong>: What a sin to kill the beautiful beast that was to\nbear the King to his palace!"] -->|"I remain silent"| 87
		60 -->|"There's something you don't know"| 68
		87["<strong>newking</strong>: Silence! let him alone; he is ever my most trusty\nJohn. Who knows for what good end he may have done this thing?"] -->|"I serve in silence"| 61
		87 -->|"I know something I need to tell you"| 68
		61["<strong>narrator</strong>: So they went on their way and entered the palace, and\nthere in the hall stood a cupboard in which lay the ready-made bridal shirt,\nlooking for all the world as though it were made of gold and silver."] --> 88
		61 --> 88
		88["<strong>newking</strong>: The young King went toward it and was about to take\nhold of it"] --> 62
		88 --> 62
		62["<strong>narrator</strong>: but Trusty John, pushing him aside, seized it with\nhis gloved hands, threw it hastily into the fire, and let it burn"] --> 89
		62 --> 89
		89["<strong>servants</strong>: See, he's actually burning the King's bridal shirt"] -->|"I shall remain silent"| 63
		89 -->|"I have a secret to share"| 68
		63["<strong>newking</strong>: Who knows for what good purpose he does it? Let him\nalone, he is my most trusty John"] -->|"Thank you for the trust, mylord"| 90
		63 -->|"I can't hide it from you anymore"| 68
		90["<strong>narrator</strong>: Then the wedding was celebrated, the dance began, and\nthe bride joined in, but Trusty John watched her countenance carefully."] --> 64
		90 --> 64
		64["<strong>princess</strong>: Of a sudden she grew deadly white, and fell to the\nground as if she were dead."] --> 65
		64 --> 65
		65["<strong>newking</strong>: He at once sprang hastily toward her, lifted her up,\nand bore her to a room, where he laid her down, and kneeling beside her he drew\nthree drops of blood from her right side, and spat them out."] --> 66
		65 --> 66
		66["<strong>newking</strong>: Throw John into prison. He will hanged tomorrow\nmorning"] -->|"I beg for the privelege of last words"| 67
		66 -->|"Every one doomed to death has the right to speak once before he dies?"| 67
		67["<strong>newking</strong>: Yes, it shall be granted to you. What do you have to\nsay of yourself?"] -->|"I have nothing to say, mylord"| 85
		67 -->|"I am unjustly condemned, I have overheard this damnation brought by three ravens"| 68
		68["<strong>newking</strong>: Oh! my most trusty John, pardon! pardon! Take him down"] -->|"Uhm..."| 69
		68 -->|"I..."| 69
		69["<strong>narrator</strong>: But as he uttered the last word your body had fallen\nlifeless to the ground, and was a stone"] --> 70
		69 --> 70
	end
	subgraph Resurrection
		70["<strong>newking</strong>: Ah! how ill have I rewarded such great fidelity! Lift\nhim and put him in my bedroom near my bed"] --> 71
		70 --> 71
		71["<strong>newking</strong>: Oh! if I could only restore you to life, my most\ntrusty John!"] --> 36
		71 --> 36
		36["<strong>narrator</strong>: After a time the Queen gave birth to twins, two small\nsons, who throve and grew, and were a constant joy to her. One day when the\nQueen was at church, and the two children sat and played with their father, he\ngazed again full of grief on the stone statue"] --> 72
		36 --> 72
		72["<strong>newking</strong>: Oh, if I could only restore you to life, my most\ntrusty John!"] -->|"If you cut off with your own hand the heads of your two children, and smear me\nwith their blood, I shall come back to life"| 75
		72 -->|"Yes, you can restore me to life again if you are prepared to sacrifice what you\nhold most dear"| 73
		73["<strong>newking</strong>: All I have in the world will I give up for your sake"] -->|"It is the blood of your children taken by your own hand that needs to be smeared\non me"| 75
		73 -->|"If you cut off with your own hand the heads of your two children, and smear me\nwith their blood"| 75
		75["<strong>narrator</strong>: The King was aghast when he heard that he had himself\nto put his children to death; but when he thought of Trusty John's fidelity, and\nhow he had even died for him, he drew his sword, and with his own hand cut the\nheads off his children"] --> 76
		75 --> 76
		76["<strong>narrator</strong>: And when he had smeared the stone with their blood,\nlife came back, and Trusty John stood once more safe and sound before him."] -->|"I mourn the loss of your children"| 92
		76 -->|"Your loyalty shall be rewarded"| 77
		77["<strong>newking</strong>: Taking up the heads of the children, he placed them on\ntheir bodies, smeared the wounds with their blood, and in a minute they were all\nright again and jumping about as if nothing had happened."] --> 78
		77 --> 78
		78["<strong>narrator</strong>: Then the King was full of joy, and when he saw the\nQueen coming, he hid Trusty John and the two children in a big cupboard."] --> 79
		78 --> 79
		79["<strong>princess</strong>: In church my thoughts dwelt constantly on Trusty\nJohn, and of what he has suffered for us"] --> 80
		79 --> 80
		80["<strong>newking</strong>: Dear wife, we can restore him to life, but the price\nasked is our two little sons; we must sacrifice them"] --> 81
		80 --> 81
		81["<strong>princess</strong>: My heart sinks at the thought, but we owe it to him\non account of his great fidelity"] --> 82
		81 --> 82
		82["<strong>happyend</strong>: Then he rejoiced that she was of the same mind as he\nhad been, and going forward he opened the cupboard, and fetched the two children\nand Trusty John out, saying: 'God be praised! Trusty John is free once more, and\nwe have our two small sons again.' Then he related to her all that had passed,\nand they lived together happily ever afterward."] -->|"Start again"| 0
		82 -->|"Start again"| 0
	end
	subgraph Non-story
		84["<strong>newking</strong>: She must be some kind of princess. You need to find\nwho she is"] -->|"Maybe she's from the Golden Roof?"| 21
		84 -->|"She is the Princess of the Golden Roof"| 21
		85["<strong>badend</strong>: And so did Trusty John meet his end - in silence, but\nfaithful to his lord"] -->|"Start again"| 0
		85 -->|"Start again"| 0
	end
	93["<strong>newking</strong>: When the queen came back from church, the king asked\nher 'Did you pray in church?'"] --> 94
	93 --> 94
	94["<strong>princess</strong>: Yes, but my thoughts dwelt constantly on Trusty John,\nand of what he has suffered for us"] --> 95
	94 --> 95
	95["<strong>newking</strong>: Dear wife, we can restore him to life, but the price\nasked is our two little sons; we must sacrifice them"] --> 96
	95 --> 96
	96["<strong>princess</strong>: The Queen grew white and her heart sank, but she\nreplied: 'We owe it to him on account of his great fidelity.' and left the room\ncrying"] --> 97
	96 --> 97
	97["<strong>newking</strong>: The King was aghast when he heard that he had himself\nto put his children to death; but when he thought of Trusty John's fidelity, and\nhow he had even died for him, he drew his sword, and with his own hand cut the\nheads off his children."] --> 98
	97 --> 98
	98["<strong>narrator</strong>: And when he had smeared the stone with their blood,\nlife came back, and Trusty John stood once more safe and sound before him."] -->|"I mourn the loss of your children"| 92
	98 -->|"Your loyalty shall be rewarded"| 99
	99["<strong>newking</strong>: Taking up the heads of the children, he placed them on\ntheir bodies, smeared the wounds with their blood, and in a minute they were all\nright again and jumping about as if nothing had happened."] --> 82
	99 --> 82
	92["<strong>newking</strong>: Good that you're back my Trusty John, but how can I\nlive with what I have done?"] -->|"I have a way to bring them back"| 99
	92 -->|"I owe you for saving my life"| 99
	48["<strong>narrator</strong>: Now when they drew near the land, a splendid chestnut\nhorse bounded forward"] -->|"What a beautiful horse"| 103
	48 -->|"This is truly a marvelous animal"| 103
	103["<strong>newking</strong>: Capital! This animal shall carry me to my palace, I\nwill mount it"] -->|"It is a beautiful animal, Mylord"| 104
	103 -->|"Let me help you, My King"| 104
	104["<strong>narrator</strong>: The King had not yet mounted the horse properly, it\njumped wildly kicking you to death and breaking the Kings neck to the\nfloor<br/>Sadly so ended a story that started to beautifully"] -->|"Start again"| 0
	104 -->|"Start again"| 0
	subgraph The_king_attends_to_the_princess_and_wins_her_heart_so_they_sail_away
		32["<strong>maiden</strong>: Oh! my, what beautiful gold wares! Let me set down my\npails, and examine your gold items one thing after the other"] -->|"These are only a first gift to the princess"| 100
		32 -->|"We have much more on our ship"| 100
		100["<strong>narrator</strong>: The maiden ran back to her Princess and it was\narranged that the King attends the Princess on the next day "] -->|"This was exactly my plan"| 101
		100 -->|"It must me God's will that things work this way"| 101
		101["<strong>narrator</strong>: Soon after she commits her heart to the King and\nagrees to sail away back to his kingdom for a ceremony"] -->|"Let's pray for their happiness together"| 47
		101 -->|"I have served well my Master again"| 47
	end
```