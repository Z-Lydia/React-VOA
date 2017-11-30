var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/header.json', function(req, res, next) {
	res.json({
		"ret":true,
		"data":{
			"title":[{
				"id":1,
				"content":"大家说英语",
				"url":"/list/1"
			},{
				"id":2,
				"content":"空中英语教室",
				"url":"/list/2"
			},{
				"id":3,
				"content":"彭蒙惠英语",
				"url":"/list/3"
			},{
				"id":4,
				"content":"科学美国人",
				"url":"/list/4"
			},{
				"id":5,
				"content":"冬吴相对论",
				"url":"/list/5"
			},{
				"id":6,
				"content":"走遍美国",
				"url":"/list/6"
			},{
				"id":7,
				"content":"英文名著",
				"url":"/list/7"
			},{
				"id":8,
				"content":"托福考试",
				"url":"/list/8"
			},{
				"id":9,
				"content":"美国脱口秀",
				"url":"/list/9"
			},{
				"id":10,
				"content":"BBC听力资料",
				"url":"/list/10"
			},{
				"id":11,
				"content":"外教课堂",
				"url":"/list/11"
			}],
			"nav":[{
				"id":1,
				"title":"常速英语",
				"url":"/normal",
				"list":[{
					"id":1,
					"content":"音频",
					"url":"/normal/1"
				},{
					"id":2,
					"content":"视频",
					"url":"/normal/2"
				},{
					"id":3,
					"content":"翻译",
					"url":"/normal/3"
				}]
			},{
				"id":2,
				"title":"慢速英语(中级)",
				"url":"/slow",
				"list":[{
					"id":1,
					"content":"科技报道",
					"url":"/slow/1"
				},{
					"id":2,
					"content":"词汇掌故",
					"url":"/slow/2"
				},{
					"id":3,
					"content":"美国故事",
					"url":"/slow/3"
				},{
					"id":4,
					"content":"时事新闻",
					"url":"/slow/4"
				},{
					"id":5,
					"content":"经济报道",
					"url":"/slow/5"
				},{
					"id":6,
					"content":"建国史话",
					"url":"/slow/6"
				},{
					"id":7,
					"content":"教育报道",
					"url":"/slow/7"
				},{
					"id":8,
					"content":"自然探索",
					"url":"/slow/8"
				},{
					"id":9,
					"content":"健康报道",
					"url":"/slow/9"
				},{
					"id":10,
					"content":"美国万花筒",
					"url":"/slow/10"
				},{
					"id":11,
					"content":"科学动态",
					"url":"/slow/11"
				},{
					"id":12,
					"content":"农业报道",
					"url":"/slow/12"
				},{
					"id":13,
					"content":"美国专栏",
					"url":"/slow/13"
				},{
					"id":14,
					"content":"美国人物",
					"url":"/slow/14"
				}]
			},{
				"id":3,
				"title":"英语教学(初级)",
				"url":"/teach",
				"list":[{
					"id":1,
					"content":"流行美语",
					"url":"/teach/1"
				},{
					"id":2,
					"content":"英语三级跳",
					"url":"/teach/2"
				},{
					"id":3,
					"content":"美国习惯用语",
					"url":"/teach/3"
				},{
					"id":4,
					"content":"学个词",
					"url":"/teach/4"
				},{
					"id":5,
					"content":"AS IT IS",
					"url":"/teach/5"
				},{
					"id":6,
					"content":"体育美语",
					"url":"/teach/6"
				},{
					"id":7,
					"content":"美语怎么说",
					"url":"/teach/7"
				},{
					"id":8,
					"content":"商务礼节美语",
					"url":"/teach/8"
				},{
					"id":9,
					"content":"双语新闻",
					"url":"/teach/9"
				},{
					"id":10,
					"content":"美语咖啡屋",
					"url":"/teach/10"
				},{
					"id":11,
					"content":"中级美语",
					"url":"/teach/11"
				},{
					"id":12,
					"content":"美语培训班",
					"url":"/teach/12"
				},{
					"id":13,
					"content":"VOA每日一课",
					"url":"/teach/13"
				},{
					"id":14,
					"content":"OMG美语",
					"url":"/teach/14"
				},{
					"id":15,
					"content":"VOA相关资料",
					"url":"/teach/15"
				}]
			}]
		}
	})
});

router.get('/api/index.json', function(req, res, next) {
	res.json({
		"ret":true,
		"data":{
			"content":[{
				"id":3,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Leonardo da Vinci Painting Sells for Record $450 Million",
				"time":"2017-11-17",
				"url":"/details/1"
			},{
				"id":4,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Small Montana City Elects Former Refugee as Mayor",
				"time":"2017-11-17",
				"url":"/details/2"
			},{
				"id":5,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Indian Hindus Attacking Muslims, Stealing Their Cows",
				"time":"2017-11-17",
				"url":"/details/3"
			},{
				"id":6,
				"title":"VOA常速英语",
				"titleUrl":"/normal",
				"content":"Clearing Explosive Remnants of War in the West Bank",
				"time":"2017-11-17",
				"url":"/details/4"
			},{
				"id":7,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Japan Seeks to Expand Influence in Southeast Asia",
				"time":"2017-11-16",
				"url":"/details/5"
			},{
				"id":8,
				"title":"科技报道",
				"titleUrl":"/slow/1",
				"content":"Distant Star Refuses to Die",
				"time":"2017-11-16",
				"url":"/details/6"
			},{
				"id":9,
				"title":"科技报道",
				"titleUrl":"/slow/1",
				"content":"5 Reasons to Try Firefox ‘Quantum’ Browser",
				"time":"2017-11-16",
				"url":"/details/7"
			},{
				"id":10,
				"title":"VOA常速英语",
				"titleUrl":"/normal",
				"content":"President Trump at ASEAN Summit",
				"time":"2017-11-16",
				"url":"/details/8"
			},{
				"id":11,
				"title":"VOA常速英语",
				"titleUrl":"/normal",
				"content":"U.S. Supports Safe Return of Rohingya to Burma",
				"time":"2017-11-16",
				"url":"/details/9"
			},{
				"id":12,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Richard Nixon: Resigned",
				"time":"2017-11-13",
				"url":"/details/10"
			},{
				"id":13,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Many North Koreans Depend on Informal Markets",
				"time":"2017-11-13",
				"url":"/details/11"
			},{
				"id":14,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"In Lebanon, Musician Helps Voices of Children Rise Above Poverty",
				"time":"2017-11-13",
				"url":"/details/12"
			},{
				"id":15,
				"title":"科技报道",
				"titleUrl":"/slow/1",
				"content":"New Orangutan Species Discovered in Indonesia",
				"time":"2017-11-13",
				"url":"/details/13"
			},{
				"id":16,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"'Paradise Papers' Show Secret Wealth of Officials, Famous People",
				"time":"2017-11-07",
				"url":"/details/14"
			},{
				"id":17,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Saudi Crown Prince Detains Opponents, Expands Power",
				"time":"2017-11-07",
				"url":"/details/15"
			},{
				"id":18,
				"title":"健康报道",
				"titleUrl":"/slow/9",
				"content":"Researchers Shocked at 'Pain Gap' Between Rich and Poor",
				"time":"2017-11-17",
				"url":"/details/16"
			},{
				"id":19,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Vietnam Tech Startups Seek Next Step Forward",
				"time":"2017-11-06",
				"url":"/details/17"
			},{
				"id":20,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Lyndon Johnson: Complicated",
				"time":"2017-11-06",
				"url":"/details/18"
			},{
				"id":21,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Saudi Arabia Is First Country to Give Citizenship to Robot",
				"time":"2017-11-06",
				"url":"/details/19"
			},{
				"id":22,
				"title":"科技报道",
				"titleUrl":"/slow/1",
				"content":"Have Scientists Discovered a Radio ‘Space Shield?’",
				"time":"2017-11-06",
				"url":"/details/20"
			},{
				"id":23,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Airlines Begin New Security Measures for Flights to US",
				"time":"2017-10-26",
				"url":"/details/21"
			},{
				"id":24,
				"title":"科技报道",
				"titleUrl":"/slow/1",
				"content":"Smart Cameras to Help You Capture Better Photos",
				"time":"2017-10-26",
				"url":"/details/22"
			},{
				"id":25,
				"title":"VOA常速英语",
				"titleUrl":"/normal",
				"content":"Ongoing U.S. Support for Rohingya Refugees",
				"time":"2017-10-26",
				"url":"/details/23"
			},{
				"id":26,
				"title":"教育报道",
				"titleUrl":"/slow/7",
				"content":"Educators Try New Methods to Save American Indian Languages",
				"time":"2017-10-25",
				"url":"/details/24"
			},{
				"id":27,
				"title":"科技报道",
				"titleUrl":"/slow/1",
				"content":"Americans Worry Robots Will Take Jobs, Leave Nothing to Do",
				"time":"2017-10-25",
				"url":"/details/25"
			},{
				"id":28,
				"title":"VOA常速英语",
				"titleUrl":"/normal",
				"content":"U.S. Withdraws From UNESCO",
				"time":"2017-10-25",
				"url":"/details/26"
			},{
				"id":29,
				"title":"VOA常速英语",
				"titleUrl":"/normal",
				"content":"Countering Iran's Aggression",
				"time":"2017-10-25",
				"url":"/details/27"
			},{
				"id":30,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Neither Side Backing Down in Catalonia Independence Drive",
				"time":"2017-10-24",
				"url":"/details/28"
			},{
				"id":31,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Fake News Still Here, Even As Facebook, Google Fight It",
				"time":"2017-10-24",
				"url":"/details/29"
			},{
				"id":32,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Turkish, US Diplomats Work to Ease Troubled Ties",
				"time":"2017-10-24",
				"url":"/details/30"
			},{
				"id":33,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Harry Potter Exhibit Opens at British Library",
				"time":"2017-10-20",
				"url":"/details/31"
			},{
				"id":34,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Researchers Genetically Modify Corn to Increase Nutrition",
				"time":"2017-10-20",
				"url":"/details/32"
			},{
				"id":35,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Airlines Begin New Security Measures for Flights to US",
				"time":"2017-10-20",
				"url":"/details/33"
			},{
				"id":36,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"The Benefits of Baby Talk",
				"time":"2017-10-20",
				"url":"/details/34"
			},{
				"id":37,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Forbes: Trump’s Wealth Suffers Major Drop Since Presidency",
				"time":"2017-10-26",
				"url":"/details/35"
			},{
				"id":38,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Researchers Aim to Clean up South Asia's Dirty Kilns",
				"time":"2017-10-26",
				"url":"/details/36"
			},{
				"id":39,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Another American Writer Wins Man Booker Prize",
				"time":"2017-10-19",
				"url":"/details/37"
			},{
				"id":40,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"How Powerful Personal Experiences Changed Opinions",
				"time":"2017-10-16",
				"url":"/details/38"
			},{
				"id":41,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"New Lego Set Honors 'Women of NASA'",
				"time":"2017-10-16",
				"url":"/details/39"
			},{
				"id":42,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"Apple Co-Founder Launches Technology School",
				"time":"2017-10-10",
				"url":"/details/40"
			},{
				"id":43,
				"title":"AS IT IS",
				"titleUrl":"/teach/7",
				"content":"President Trump May Visit Korean DMZ on Asia Trip",
				"time":"2017-10-10",
				"url":"/details/41"
			}],
			"friendLink":[{
				"id":1,
				"content":"小马过河",
				"URL":"/xiaoma"
			},{
				"id":2,
				"content":"雅思培训",
				"URL":"/xiaoma"
			},{
				"id":3,
				"content":"留学机构",
				"URL":"/xiaoma"
			},{
				"id":4,
				"content":"出国语言培训",
				"URL":"/xiaoma"
			},{
				"id":5,
				"content":"大学生",
				"URL":"/xiaoma"
			},{
				"id":6,
				"content":"人人听力网",
				"URL":"/xiaoma"
			},{
				"id":7,
				"content":"英语口语",
				"URL":"/xiaoma"
			},{
				"id":8,
				"content":"英文小说网",
				"URL":"/xiaoma"
			},{
				"id":9,
				"content":"口译",
				"URL":"/xiaoma"
			},{
				"id":10,
				"content":"美国之音",
				"URL":"/xiaoma"
			},{
				"id":11,
				"content":"给力英语网",
				"URL":"/xiaoma"
			},{
				"id":12,
				"content":"中小学教育",
				"URL":"/xiaoma"
			},{
				"id":13,
				"content":"翻译资格考试",
				"URL":"/xiaoma"
			},{
				"id":14,
				"content":"GCT",
				"URL":"/xiaoma"
			},{
				"id":15,
				"content":"英语六级",
				"URL":"/xiaoma"
			},{
				"id":16,
				"content":"英语学习网站",
				"URL":"/xiaoma"
			},{
				"id":17,
				"content":"泰语学习网站",
				"URL":"/xiaoma"
			},{
				"id":18,
				"content":"英蕊幼儿英语",
				"URL":"/xiaoma"
			},{
				"id":19,
				"content":"手抄报",
				"URL":"/xiaoma"
			},{
				"id":20,
				"content":"简单学习网",
				"URL":"/xiaoma"
			},{
				"id":21,
				"content":"哈尔滨英语",
				"URL":"/xiaoma"
			},{
				"id":22,
				"content":"英语口语培训",
				"URL":"/xiaoma"
			},{
				"id":23,
				"content":"在线英语培训",
				"URL":"/xiaoma"
			},{
				"id":24,
				"content":"英语培训",
				"URL":"/xiaoma"
			},{
				"id":25,
				"content":"韩语学习网",
				"URL":"/xiaoma"
			},{
				"id":26,
				"content":"职称英语考试",
				"URL":"/xiaoma"
			},{
				"id":27,
				"content":"家教",
				"URL":"/xiaoma"
			},{
				"id":28,
				"content":"在线英语培训",
				"URL":"/xiaoma"
			}]
		}
	})
});

router.get('/api/details.json', function(req, res, next) {
	if( req.query.id==='1' ){
		res.json({
			"ret":true,
			"data":[{
				"id":1,
				"parentList":"AS IT IS",
				"title":"Gerald Ford: Unelected",
				"time":"2017-11-20 06:29",
				"source":"VOA官网",
				"downloadCount":"496",
				"radio":"../../static/raido/D_1.mp3",	
				"img":"http://www.easyvoa.com/uploads/allimg/171120/13310153T-0.jpg",
				"content":"<p class='detailPage_article'>VOA Learning English presents America’s Presidents.</p><p class='detailPage_article'>Today we are talking about Gerald Ford. Ford was the 38th president, but he was never elected to the position.</p><p class='detailPage_article'>Gerald Ford official presidential portrait by David Hume Kennerly Gerald Ford official presidential portrait by David Hume Kennerly<br/>Instead, an unusual series of events brought him there.</p><p class='detailPage_article'>Many historians have described Ford as a good man facing a difficult situation. He tried to fix a troubled economy, end United States' involvement in Vietnam, and show people that the U.S. government could continue to operate after a crisis.</p><img class='detailPage_article_img' src='http://www.easyvoa.com/uploads/allimg/171120/13310153T-0.jpg' /><p class='detailPage_article'>Critics from the two main political parties had problems with Ford’s efforts. And voters did not elect him president when they had the chance in 1976.</p><p class='detailPage_article'>But he is remembered in American history for making many voters feel better about their elected officials.</p><p class='detailPage_article'><strong>Early life</strong></p><p class='detailPage_article'>When he was born, the future president was given his father’s name: Leslie Lynch King.</p><p class='detailPage_article'>But the boy’s father was abusive. His mother separated from him a short time after their son was born. She asked a court for permission to cancel their marriage. Her request was quickly approved.</p><p class='detailPage_article'>She and the boy moved from the Midwestern state of Nebraska to Michigan. In a few years, the mother married a man named Gerald Ford. The couple had three sons together.</p><p class='detailPage_article'>The new family was warm and loving. In time, the oldest boy officially took his step-father’s name and became Gerald Rudolph Ford, Junior. He was called Jerry for short.</p><p class='detailPage_article'>Growing up, Jerry Ford was a well-liked person and a good student. He was also a top football player. He was named the most valuable player on his team at the University of Michigan. After finishing college, he was offered work with professional football teams.</p><p class='detailPage_article'>But Ford wanted to continue his education instead. He accepted coaching positions for the football and boxing teams at Yale University in Connecticut. In time, he attended the law school there.</p><p class='detailPage_article'>Ford’s path to politics was similar to that of other presidents during that period. He worked at a law office in his home state. He fought in World War II. He married.</p><p class='detailPage_article'>Ford’s wife was Elizabeth Bloomer. Her friends called her Betty. She had been a dancer and worked as a fashion model. The Fords went on to have four children.</p><p class='detailPage_article'>When Gerald Ford was 35 years old, he launched his political career. The Republican Party chose him as its candidate for a seat in the U.S. House of Representatives.</p><p class='detailPage_article'>Ford was elected to represent his home area of Grand Rapids, Michigan. But unlike many other politicians, he did not move on to the Senate or become governor of a state. Instead, he stayed in the House of Representatives for 25 years.</p><p class='detailPage_article'>The job of congressman was, in many ways, a good choice for Ford. He was well-liked by many voters and other lawmakers. He could help different groups come to agreement. He took increasingly important positions on political issues, and in time became the top person in his party in the House.</p><p class='detailPage_article'>Ford was a strong supporter of Republican presidents. In the 1968 election, Ford advocated for Richard Nixon. Ford liked Nixon’s plans for the United States, as well as his efforts to improve relations with China and the Soviet Union.</p><p class='detailPage_article'>Both Ford and Nixon were re-elected to their positions in 1972.</p><p class='detailPage_article'>But by then, major problems had come to light in Nixon’s administration.</p><p class='detailPage_article'><strong>An unusual path to the White House</strong></p><p class='detailPage_article'>One problem in the early 1970s related to Nixon’s vice president, Spiro Agnew. Agnew had been vice president since 1969. Five years later, officials found evidence that he had accepted money from contractors, both while Maryland’s governor and as vice president.</p><p class='detailPage_article'>In answer, Agnew resigned from the vice presidency.</p><p class='detailPage_article'>Normally, voters elect a vice president along with a president every four years. But by coincidence, the U.S. Constitution had recently been updated to say what happens if the country needs a vice president unexpectedly. It states that the president has to nominate someone for the position. Then, a majority of lawmakers in Congress must agree.</p><p class='detailPage_article'>So, in 1973, Nixon nominated Gerald Ford to take Agnew’s position. Nixon was not especially close to Ford. But, he knew a majority of lawmakers would likely accept him as vice president.</p><p class='detailPage_article'>They did.</p><p class='detailPage_article'>However, Ford did not serve in the position long. In eight months, another unexpected event put him in the Oval Office.</p><p class='detailPage_article'><strong>Presidency</strong></p><p class='detailPage_article'>In August 1974, President Richard Nixon resigned from office. He was the first president to do so.</p><p class='detailPage_article'>As a result, the vice president, Gerald Ford, became president.</p><p class='detailPage_article'>Ford was sworn-in as president on August 9, 1974. Then he spoke to the nation on television. He said, “My fellow Americans, our long national nightmare is over.” He told people, “Our Constitution works. Our great republic is a government of laws and not men.”</p><p class='detailPage_article'>The public had understandably lost a good deal of faith in government officials, and especially in Richard Nixon. Ford wanted to re-establish their trust.</p><p class='detailPage_article'>But a few weeks after taking office, Ford used his presidential powers to pardon Nixon. The pardon meant that Nixon would never face a criminal trial or, if found guilty, punishment for his actions.</p><p class='detailPage_article'>Ford said he believed pardoning Nixon would help Americans begin to recover from their painful experience with the former president.</p><p class='detailPage_article'>But instead, the move angered many people. They believed that Nixon should be held responsible. They also lost some of their trust in Ford.</p><p class='detailPage_article'>In addition to these political troubles, Ford faced other difficult issues. The American economy was struggling. His administration had to deal with unemployment, inflation and the lasting effects of an energy crisis. The high price of oil imports came at a time when Americans were using more and more gasoline.</p><p class='detailPage_article'>Ford took steps aimed at improving the economy. But critics said he was not consistent. Some criticized him for increasing government spending and cutting taxes; others criticized him for reducing government spending and raising taxes.</p><p class='detailPage_article'>Ford also oversaw the withdrawal of Americans from Vietnam. An earlier agreement had brought a ceasefire to groups in South Vietnam, North Vietnam, and Communist forces. The U.S. officially withdrew its combat troops in 1973. But the fighting restarted.</p><p class='detailPage_article'>Ford asked Congress to approve military and humanitarian aid for the area. But U.S. lawmakers did not approve the full amount. And in time, they cut military aid.</p><p class='detailPage_article'>In 1975, Communist forces began to take control of Saigon, the capital of South Vietnam.</p><p class='detailPage_article'>Ford ordered all remaining Americans in the country to leave, along with any South Vietnamese who were connected to the United States.</p><p class='detailPage_article'>He said that, as far as Americans were concerned, the Vietnam War was finished.</p><p class='detailPage_article'>Americans did not appear to blame Ford for the troubling end of the country’s involvement in Vietnam. And some recognized that the country’s economic and energy problems had started long before he became president.</p><p class='detailPage_article'>But, in general, Ford did not have the support of Congress. And many voters did not forgive him for pardoning Nixon.</p><p class='detailPage_article'>In 1976, Ford officially campaigned for president for the first time.</p><p class='detailPage_article'>He won his party’s nomination in a close race against Ronald Reagan, the former governor of California.</p><p class='detailPage_article'>But he lost the general election to the Democratic candidate, who said one of his best qualities was that he did not have experience in the federal government.</p><p class='detailPage_article'>The argument appeared persuasive to many voters, who still did not appear to be enthusiastic about the government. In the 1976 election, nearly half of all people who were legally able to vote chose not to.</p><p class='detailPage_article'>Ford left the presidency graciously. He said that, because he had not planned to be president, he was thankful for the unexpected opportunity.</p><p class='detailPage_article'><strong>Legacy</strong></p><p class='detailPage_article'>Although Ford said he was ready to retire from politics, he continued to be active in public life. He advised others on government affairs, published books, and sat on boards and committees.</p><p class='detailPage_article'>His wife, Betty Ford, also left a lasting effect on the public.</p><p class='detailPage_article'>As first lady, she had spoken about her experience with breast cancer.</p><p class='detailPage_article'>After her husband left the presidency, she also spoke openly about her battle with alcohol and drug abuse.</p><p class='detailPage_article'>In 1982, Betty Ford co-founded the Betty Ford Center in California to help people get treatment for drug addiction.</p><p class='detailPage_article'>She announced her husband’s death in 2006. Gerald Ford died of heart disease at the age of 93.</p><p class='detailPage_article'>By that time, most the public had accepted that one of Ford’s biggest achievements was to help the country recover after Nixon resigned. President Bill Clinton gave Ford a Presidential Medal of Freedom for his efforts.</p><p class='detailPage_article'>And even Jimmy Carter, who beat Ford in the 1976 presidential election, began his inauguration speech by thanking Ford. Carter said, “For myself and for our Nation, I want to thank my predecessor for all he has done to heal our land.”</p><p class='detailPage_article'>I’m Kelly Jean Kelly.</p><p class='detailPage_article'>Kelly Jean Kelly wrote this story for Learning English. George Grow was the editor.</p>"
			}]
		})
	}
});

router.get( "/api/list.json",function( req,res,next ){
	if( req.query.id==='1' ){
		res.json({
			"ret":true,
			"data":{
				"previous":[{
					"id":1,
					"content":"2014年最新大家说英语学习资料信息",
					"url":"/2014",
					"tip":""
				},{
					"id":2,
					"content":"大家说英语：20110228 MP3在线课程 Tea or Tree?",
					"url":"/list/detail/1",
					"tip":""
				},{
					"id":3,
					"content":"大家说英语：20110226 MP3在线课程 复习课程",
					"url":"/list/detail/2",
					"tip":""
				},{
					"id":4,
					"content":"大家说英语：20110225 MP3在线课程 What Happens at Studio Classroom?",
					"url":"/list/detail/3",
					"tip":""
				},{
					"id":5,
					"content":"大家说英语：20110224 MP3在线课程 Living a Healthy Life",
					"url":"/list/detail/4",
					"tip":""
				},{
					"id":6,
					"content":"大家说英语：20110223 MP3在线课程 Living a Healthy Life",
					"url":"/list/detail/5",
					"tip":""
				},{
					"id":7,
					"content":"大家说英语：20110222 MP3在线课程 What Do You Like?",
					"url":"/list/detail/6",
					"tip":""
				},{
					"id":8,
					"content":"大家说英语：20110221 MP3在线课程 What Do You Like?",
					"url":"/list/detail/7",
					"tip":""
				},{
					"id":9,
					"content":"大家说英语：20110219 MP3在线课程 每周复习",
					"url":"/list/detail/8",
					"tip":""
				},{
					"id":10,
					"content":"大家说英语：20110218 MP3在线课程 Feeling Disappointed",
					"url":"/list/detail/9",
					"tip":""
				},{
					"id":11,
					"content":"大家说英语：20110217 MP3在线课程 Pam's Big News",
					"url":"/list/detail/10",
					"tip":""
				},{
					"id":12,
					"content":"大家说英语：20110216 MP3在线课程 Pam's Big News",
					"url":"/list/detail/11",
					"tip":""
				},{
					"id":13,
					"content":"大家说英语：20110215 MP3在线课程 Valentine's Day",
					"url":"/list/detail/12",
					"tip":""
				},{
					"id":14,
					"content":"大家说英语：20110214 MP3在线课程 Valentine's Day",
					"url":"/list/detail/13",
					"tip":""
				},{
					"id":15,
					"content":"大家说英语：20110212 MP3在线课程 复习课程",
					"url":"/list/detail/14",
					"tip":""
				},{
					"id":16,
					"content":"大家说英语：20110211 MP3在线课程 Why You Should Forgive",
					"url":"/list/detail/15",
					"tip":""
				},{
					"id":17,
					"content":"大家说英语：20110210 MP3在线课程 Think First",
					"url":"/list/detail/16",
					"tip":""
				},{
					"id":18,
					"content":"大家说英语：20110209 MP3在线课程 Think First",
					"url":"/list/detail/17",
					"tip":""
				},{
					"id":19,
					"content":"大家说英语：20110208 MP3在线课程 Good Manners",
					"url":"/list/detail/18",
					"tip":""
				},{
					"id":20,
					"content":"大家说英语：20110207 MP3在线课程 Thank You!",
					"url":"/list/detail/19",
					"tip":""
				},{
					"id":21,
					"content":"大家说英语：20110204 MP3在线课程 Don't Do That!",
					"url":"/list/detail/20",
					"tip":""
				},{
					"id":22,
					"content":"大家说英语：20110203 MP3在线课程 Celebrating Chinese New Year",
					"url":"/list/detail/21",
					"tip":""
				},{
					"id":23,
					"content":"大家说英语：20110202 MP3在线课程 Celebrating Chinese New Year",
					"url":"/list/detail/22",
					"tip":"【庆祝农历新年】"
				},{
					"id":24,
					"content":"大家说英语：20110201 MP3在线课程 Special Food",
					"url":"/list/detail/23",
					"tip":"【新年特制餐点】"
				},{
					"id":25,
					"content":"大家说英语：20110131 MP3在线课程 May I Use Your Phone?",
					"url":"/list/detail/24",
					"tip":""
				},{
					"id":26,
					"content":"大家说英语：20110129 MP3在线课程",
					"url":"/list/detail/25",
					"tip":""
				},{
					"id":27,
					"content":"大家说英语：20110128 MP3在线课程 Photography",
					"url":"/list/detail/26",
					"tip":""
				},{
					"id":28,
					"content":"2014年最新大家说英语学习资料信息",
					"url":"/list/detail/27",
					"tip":""
				},{
					"id":29,
					"content":"大家说英语：20110228 MP3在线课程 Tea or Tree?",
					"url":"/list/detail/28",
					"tip":""
				},{
					"id":30,
					"content":"大家说英语：20110226 MP3在线课程 复习课程",
					"url":"/list/detail/29",
					"tip":""
				},{
					"id":31,
					"content":"大家说英语：20110225 MP3在线课程 What Happens at Studio Classroom?",
					"url":"/list/detail/30",
					"tip":""
				},{
					"id":32,
					"content":"大家说英语：20110224 MP3在线课程 Living a Healthy Life",
					"url":"/list/detail/31",
					"tip":""
				},{
					"id":33,
					"content":"大家说英语：20110223 MP3在线课程 Living a Healthy Life",
					"url":"/list/detail/32",
					"tip":""
				},{
					"id":34,
					"content":"大家说英语：20110222 MP3在线课程 What Do You Like?",
					"url":"/list/detail/33",
					"tip":""
				},{
					"id":35,
					"content":"大家说英语：20110221 MP3在线课程 What Do You Like?",
					"url":"/list/detail/34",
					"tip":""
				},{
					"id":36,
					"content":"大家说英语：20110219 MP3在线课程 每周复习",
					"url":"/list/detail/35",
					"tip":""
				},{
					"id":37,
					"content":"大家说英语：20110218 MP3在线课程 Feeling Disappointed",
					"url":"/list/detail/36",
					"tip":""
				},{
					"id":38,
					"content":"大家说英语：20110217 MP3在线课程 Pam's Big News",
					"url":"/list/detail/37",
					"tip":""
				},{
					"id":39,
					"content":"大家说英语：20110216 MP3在线课程 Pam's Big News",
					"url":"/list/detail/38",
					"tip":""
				},{
					"id":40,
					"content":"大家说英语：20110215 MP3在线课程 Valentine's Day",
					"url":"/list/detail/39",
					"tip":""
				},{
					"id":41,
					"content":"大家说英语：20110214 MP3在线课程 Valentine's Day",
					"url":"/list/detail/40",
					"tip":""
				},{
					"id":42,
					"content":"大家说英语：20110212 MP3在线课程 复习课程",
					"url":"/list/detail/41",
					"tip":""
				},{
					"id":43,
					"content":"大家说英语：20110211 MP3在线课程 Why You Should Forgive",
					"url":"/list/detail/42",
					"tip":""
				},{
					"id":44,
					"content":"大家说英语：20110210 MP3在线课程 Think First",
					"url":"/list/detail/43",
					"tip":""
				},{
					"id":45,
					"content":"大家说英语：20110209 MP3在线课程 Think First",
					"url":"/list/detail/44",
					"tip":""
				},{
					"id":46,
					"content":"大家说英语：20110208 MP3在线课程 Good Manners",
					"url":"/list/detail/45",
					"tip":""
				},{
					"id":47,
					"content":"大家说英语：20110207 MP3在线课程 Thank You!",
					"url":"/list/detail/46",
					"tip":""
				},{
					"id":48,
					"content":"大家说英语：20110204 MP3在线课程 Don't Do That!",
					"url":"/list/detail/47",
					"tip":""
				},{
					"id":49,
					"content":"大家说英语：20110203 MP3在线课程 Celebrating Chinese New Year",
					"url":"/list/detail/48",
					"tip":""
				}],
				"titlePic":[{
					"id":1,
					"img":"http://www.easyvoa.com/templets/images/studioclassroom/lt_title.png"
				}],
				"leftPic":[{
					"id":1,
					"img":"http://www.easyvoa.com/templets/images/studioclassroom/lt_cover1.jpg"
				},{
					"id":2,
					"img":"http://www.easyvoa.com/templets/images/studioclassroom/lt_cover2.jpg"
				},{
					"id":3,
					"img":"http://www.easyvoa.com/templets/images/studioclassroom/lt_cover3.jpg"
				}],
				"magPic":[{
					"id":1,
					"img":"http://www.easyvoa.com/templets/images/studioclassroom/lt_mag.png"
				}]
			}
		})
	}else if( req.query.id==='2' ){
		res.json({
			"ret":true,
			"data":{
				"previous":[{
					"id":1,
					"content":"2014年最新大家说英语学习资料信息",
					"url":"/2014",
					"tip":""
				},{
					"id":2,
					"content":"大家说英语：20110228 MP3在线课程 Tea or Tree?",
					"url":"/list/detail/1",
					"tip":""
				},{
					"id":3,
					"content":"大家说英语：20110226 MP3在线课程 复习课程",
					"url":"/list/detail/2",
					"tip":""
				},{
					"id":4,
					"content":"大家说英语：20110225 MP3在线课程 What Happens at Studio Classroom?",
					"url":"/list/detail/3",
					"tip":""
				},{
					"id":5,
					"content":"大家说英语：20110224 MP3在线课程 Living a Healthy Life",
					"url":"/list/detail/4",
					"tip":""
				},{
					"id":6,
					"content":"大家说英语：20110223 MP3在线课程 Living a Healthy Life",
					"url":"/list/detail/5",
					"tip":""
				},{
					"id":7,
					"content":"大家说英语：20110222 MP3在线课程 What Do You Like?",
					"url":"/list/detail/6",
					"tip":""
				},{
					"id":8,
					"content":"大家说英语：20110221 MP3在线课程 What Do You Like?",
					"url":"/list/detail/7",
					"tip":""
				},{
					"id":9,
					"content":"大家说英语：20110219 MP3在线课程 每周复习",
					"url":"/list/detail/8",
					"tip":""
				},{
					"id":10,
					"content":"大家说英语：20110218 MP3在线课程 Feeling Disappointed",
					"url":"/list/detail/9",
					"tip":""
				},{
					"id":11,
					"content":"大家说英语：20110217 MP3在线课程 Pam's Big News",
					"url":"/list/detail/10",
					"tip":""
				},{
					"id":12,
					"content":"大家说英语：20110216 MP3在线课程 Pam's Big News",
					"url":"/list/detail/11",
					"tip":""
				},{
					"id":13,
					"content":"大家说英语：20110215 MP3在线课程 Valentine's Day",
					"url":"/list/detail/12",
					"tip":""
				},{
					"id":14,
					"content":"大家说英语：20110214 MP3在线课程 Valentine's Day",
					"url":"/list/detail/13",
					"tip":""
				},{
					"id":15,
					"content":"大家说英语：20110212 MP3在线课程 复习课程",
					"url":"/list/detail/14",
					"tip":""
				},{
					"id":16,
					"content":"大家说英语：20110211 MP3在线课程 Why You Should Forgive",
					"url":"/list/detail/15",
					"tip":""
				},{
					"id":17,
					"content":"大家说英语：20110210 MP3在线课程 Think First",
					"url":"/list/detail/16",
					"tip":""
				},{
					"id":18,
					"content":"大家说英语：20110209 MP3在线课程 Think First",
					"url":"/list/detail/17",
					"tip":""
				},{
					"id":19,
					"content":"大家说英语：20110208 MP3在线课程 Good Manners",
					"url":"/list/detail/18",
					"tip":""
				},{
					"id":20,
					"content":"大家说英语：20110207 MP3在线课程 Thank You!",
					"url":"/list/detail/19",
					"tip":""
				},{
					"id":21,
					"content":"大家说英语：20110204 MP3在线课程 Don't Do That!",
					"url":"/list/detail/20",
					"tip":""
				},{
					"id":22,
					"content":"大家说英语：20110203 MP3在线课程 Celebrating Chinese New Year",
					"url":"/list/detail/21",
					"tip":""
				},{
					"id":23,
					"content":"大家说英语：20110202 MP3在线课程 Celebrating Chinese New Year",
					"url":"/list/detail/22",
					"tip":"【庆祝农历新年】"
				},{
					"id":24,
					"content":"大家说英语：20110201 MP3在线课程 Special Food",
					"url":"/list/detail/23",
					"tip":"【新年特制餐点】"
				},{
					"id":25,
					"content":"大家说英语：20110131 MP3在线课程 May I Use Your Phone?",
					"url":"/list/detail/24",
					"tip":""
				},{
					"id":26,
					"content":"大家说英语：20110129 MP3在线课程",
					"url":"/list/detail/25",
					"tip":""
				},{
					"id":27,
					"content":"大家说英语：20110128 MP3在线课程 Photography",
					"url":"/list/detail/26",
					"tip":""
				},{
					"id":28,
					"content":"2014年最新大家说英语学习资料信息",
					"url":"/list/detail/27",
					"tip":""
				},{
					"id":29,
					"content":"大家说英语：20110228 MP3在线课程 Tea or Tree?",
					"url":"/list/detail/28",
					"tip":""
				},{
					"id":30,
					"content":"大家说英语：20110226 MP3在线课程 复习课程",
					"url":"/list/detail/29",
					"tip":""
				},{
					"id":31,
					"content":"大家说英语：20110225 MP3在线课程 What Happens at Studio Classroom?",
					"url":"/list/detail/30",
					"tip":""
				},{
					"id":32,
					"content":"大家说英语：20110224 MP3在线课程 Living a Healthy Life",
					"url":"/list/detail/31",
					"tip":""
				},{
					"id":33,
					"content":"大家说英语：20110223 MP3在线课程 Living a Healthy Life",
					"url":"/list/detail/32",
					"tip":""
				},{
					"id":34,
					"content":"大家说英语：20110222 MP3在线课程 What Do You Like?",
					"url":"/list/detail/33",
					"tip":""
				},{
					"id":35,
					"content":"大家说英语：20110221 MP3在线课程 What Do You Like?",
					"url":"/list/detail/34",
					"tip":""
				},{
					"id":36,
					"content":"大家说英语：20110219 MP3在线课程 每周复习",
					"url":"/list/detail/35",
					"tip":""
				},{
					"id":37,
					"content":"大家说英语：20110218 MP3在线课程 Feeling Disappointed",
					"url":"/list/detail/36",
					"tip":""
				},{
					"id":38,
					"content":"大家说英语：20110217 MP3在线课程 Pam's Big News",
					"url":"/list/detail/37",
					"tip":""
				},{
					"id":39,
					"content":"大家说英语：20110216 MP3在线课程 Pam's Big News",
					"url":"/list/detail/38",
					"tip":""
				},{
					"id":40,
					"content":"大家说英语：20110215 MP3在线课程 Valentine's Day",
					"url":"/list/detail/39",
					"tip":""
				},{
					"id":41,
					"content":"大家说英语：20110214 MP3在线课程 Valentine's Day",
					"url":"/list/detail/40",
					"tip":""
				},{
					"id":42,
					"content":"大家说英语：20110212 MP3在线课程 复习课程",
					"url":"/list/detail/41",
					"tip":""
				},{
					"id":43,
					"content":"大家说英语：20110211 MP3在线课程 Why You Should Forgive",
					"url":"/list/detail/42",
					"tip":""
				},{
					"id":44,
					"content":"大家说英语：20110210 MP3在线课程 Think First",
					"url":"/list/detail/43",
					"tip":""
				},{
					"id":45,
					"content":"大家说英语：20110209 MP3在线课程 Think First",
					"url":"/list/detail/44",
					"tip":""
				},{
					"id":46,
					"content":"大家说英语：20110208 MP3在线课程 Good Manners",
					"url":"/list/detail/45",
					"tip":""
				},{
					"id":47,
					"content":"大家说英语：20110207 MP3在线课程 Thank You!",
					"url":"/list/detail/46",
					"tip":""
				},{
					"id":48,
					"content":"大家说英语：20110204 MP3在线课程 Don't Do That!",
					"url":"/list/detail/47",
					"tip":""
				},{
					"id":49,
					"content":"大家说英语：20110203 MP3在线课程 Celebrating Chinese New Year",
					"url":"/list/detail/48",
					"tip":""
				}],
				"titlePic":[{
					"id":1,
					"img":"http://www.easyvoa.com/templets/images/studioclassroom/sc_title.png"
				}],
				"leftPic":[{
					"id":1,
					"img":"http://www.easyvoa.com/templets/images/studioclassroom/sc_cover1.jpg"
				},{
					"id":2,
					"img":"http://www.easyvoa.com/templets/images/studioclassroom/sc_cover2.jpg"
				},{
					"id":3,
					"img":"http://www.easyvoa.com/templets/images/studioclassroom/sc_cover3.jpg"
				}],
				"magPic":[{
					"id":1,
					"img":"http://www.easyvoa.com/templets/images/studioclassroom/sc_mag.png"
				}]
			}
		})
	}else if( req.query.id = '3' ){
		res.json({
			"ret":true,
			"data":{
				"previous":[{
					"id":1,
					"content":"2014年最新大家说英语学习资料信息",
					"url":"/2014",
					"tip":""
				},{
					"id":2,
					"content":"大家说英语：20110228 MP3在线课程 Tea or Tree?",
					"url":"/list/detail/1",
					"tip":""
				},{
					"id":3,
					"content":"大家说英语：20110226 MP3在线课程 复习课程",
					"url":"/list/detail/2",
					"tip":""
				},{
					"id":4,
					"content":"大家说英语：20110225 MP3在线课程 What Happens at Studio Classroom?",
					"url":"/list/detail/3",
					"tip":""
				},{
					"id":5,
					"content":"大家说英语：20110224 MP3在线课程 Living a Healthy Life",
					"url":"/list/detail/4",
					"tip":""
				},{
					"id":6,
					"content":"大家说英语：20110223 MP3在线课程 Living a Healthy Life",
					"url":"/list/detail/5",
					"tip":""
				},{
					"id":7,
					"content":"大家说英语：20110222 MP3在线课程 What Do You Like?",
					"url":"/list/detail/6",
					"tip":""
				},{
					"id":8,
					"content":"大家说英语：20110221 MP3在线课程 What Do You Like?",
					"url":"/list/detail/7",
					"tip":""
				},{
					"id":9,
					"content":"大家说英语：20110219 MP3在线课程 每周复习",
					"url":"/list/detail/8",
					"tip":""
				},{
					"id":10,
					"content":"大家说英语：20110218 MP3在线课程 Feeling Disappointed",
					"url":"/list/detail/9",
					"tip":""
				},{
					"id":11,
					"content":"大家说英语：20110217 MP3在线课程 Pam's Big News",
					"url":"/list/detail/10",
					"tip":""
				},{
					"id":12,
					"content":"大家说英语：20110216 MP3在线课程 Pam's Big News",
					"url":"/list/detail/11",
					"tip":""
				},{
					"id":13,
					"content":"大家说英语：20110215 MP3在线课程 Valentine's Day",
					"url":"/list/detail/12",
					"tip":""
				},{
					"id":14,
					"content":"大家说英语：20110214 MP3在线课程 Valentine's Day",
					"url":"/list/detail/13",
					"tip":""
				},{
					"id":15,
					"content":"大家说英语：20110212 MP3在线课程 复习课程",
					"url":"/list/detail/14",
					"tip":""
				},{
					"id":16,
					"content":"大家说英语：20110211 MP3在线课程 Why You Should Forgive",
					"url":"/list/detail/15",
					"tip":""
				},{
					"id":17,
					"content":"大家说英语：20110210 MP3在线课程 Think First",
					"url":"/list/detail/16",
					"tip":""
				},{
					"id":18,
					"content":"大家说英语：20110209 MP3在线课程 Think First",
					"url":"/list/detail/17",
					"tip":""
				},{
					"id":19,
					"content":"大家说英语：20110208 MP3在线课程 Good Manners",
					"url":"/list/detail/18",
					"tip":""
				},{
					"id":20,
					"content":"大家说英语：20110207 MP3在线课程 Thank You!",
					"url":"/list/detail/19",
					"tip":""
				},{
					"id":21,
					"content":"大家说英语：20110204 MP3在线课程 Don't Do That!",
					"url":"/list/detail/20",
					"tip":""
				},{
					"id":22,
					"content":"大家说英语：20110203 MP3在线课程 Celebrating Chinese New Year",
					"url":"/list/detail/21",
					"tip":""
				},{
					"id":23,
					"content":"大家说英语：20110202 MP3在线课程 Celebrating Chinese New Year",
					"url":"/list/detail/22",
					"tip":"【庆祝农历新年】"
				},{
					"id":24,
					"content":"大家说英语：20110201 MP3在线课程 Special Food",
					"url":"/list/detail/23",
					"tip":"【新年特制餐点】"
				},{
					"id":25,
					"content":"大家说英语：20110131 MP3在线课程 May I Use Your Phone?",
					"url":"/list/detail/24",
					"tip":""
				},{
					"id":26,
					"content":"大家说英语：20110129 MP3在线课程",
					"url":"/list/detail/25",
					"tip":""
				},{
					"id":27,
					"content":"大家说英语：20110128 MP3在线课程 Photography",
					"url":"/list/detail/26",
					"tip":""
				},{
					"id":28,
					"content":"2014年最新大家说英语学习资料信息",
					"url":"/list/detail/27",
					"tip":""
				},{
					"id":29,
					"content":"大家说英语：20110228 MP3在线课程 Tea or Tree?",
					"url":"/list/detail/28",
					"tip":""
				},{
					"id":30,
					"content":"大家说英语：20110226 MP3在线课程 复习课程",
					"url":"/list/detail/29",
					"tip":""
				},{
					"id":31,
					"content":"大家说英语：20110225 MP3在线课程 What Happens at Studio Classroom?",
					"url":"/list/detail/30",
					"tip":""
				},{
					"id":32,
					"content":"大家说英语：20110224 MP3在线课程 Living a Healthy Life",
					"url":"/list/detail/31",
					"tip":""
				},{
					"id":33,
					"content":"大家说英语：20110223 MP3在线课程 Living a Healthy Life",
					"url":"/list/detail/32",
					"tip":""
				},{
					"id":34,
					"content":"大家说英语：20110222 MP3在线课程 What Do You Like?",
					"url":"/list/detail/33",
					"tip":""
				},{
					"id":35,
					"content":"大家说英语：20110221 MP3在线课程 What Do You Like?",
					"url":"/list/detail/34",
					"tip":""
				},{
					"id":36,
					"content":"大家说英语：20110219 MP3在线课程 每周复习",
					"url":"/list/detail/35",
					"tip":""
				},{
					"id":37,
					"content":"大家说英语：20110218 MP3在线课程 Feeling Disappointed",
					"url":"/list/detail/36",
					"tip":""
				},{
					"id":38,
					"content":"大家说英语：20110217 MP3在线课程 Pam's Big News",
					"url":"/list/detail/37",
					"tip":""
				},{
					"id":39,
					"content":"大家说英语：20110216 MP3在线课程 Pam's Big News",
					"url":"/list/detail/38",
					"tip":""
				},{
					"id":40,
					"content":"大家说英语：20110215 MP3在线课程 Valentine's Day",
					"url":"/list/detail/39",
					"tip":""
				},{
					"id":41,
					"content":"大家说英语：20110214 MP3在线课程 Valentine's Day",
					"url":"/list/detail/40",
					"tip":""
				},{
					"id":42,
					"content":"大家说英语：20110212 MP3在线课程 复习课程",
					"url":"/list/detail/41",
					"tip":""
				},{
					"id":43,
					"content":"大家说英语：20110211 MP3在线课程 Why You Should Forgive",
					"url":"/list/detail/42",
					"tip":""
				},{
					"id":44,
					"content":"大家说英语：20110210 MP3在线课程 Think First",
					"url":"/list/detail/43",
					"tip":""
				},{
					"id":45,
					"content":"大家说英语：20110209 MP3在线课程 Think First",
					"url":"/list/detail/44",
					"tip":""
				},{
					"id":46,
					"content":"大家说英语：20110208 MP3在线课程 Good Manners",
					"url":"/list/detail/45",
					"tip":""
				},{
					"id":47,
					"content":"大家说英语：20110207 MP3在线课程 Thank You!",
					"url":"/list/detail/46",
					"tip":""
				},{
					"id":48,
					"content":"大家说英语：20110204 MP3在线课程 Don't Do That!",
					"url":"/list/detail/47",
					"tip":""
				},{
					"id":49,
					"content":"大家说英语：20110203 MP3在线课程 Celebrating Chinese New Year",
					"url":"/list/detail/48",
					"tip":""
				}],
				"titlePic":[{
					"id":1,
					"img":"http://www.easyvoa.com/templets/images/studioclassroom/ad_title.png"
				}],
				"leftPic":[{
					"id":1,
					"img":"http://www.easyvoa.com/templets/images/studioclassroom/ad_cover1.jpg"
				},{
					"id":2,
					"img":"http://www.easyvoa.com/templets/images/studioclassroom/ad_cover2.jpg"
				},{
					"id":3,
					"img":"http://www.easyvoa.com/templets/images/studioclassroom/ad_cover3.jpg"
				}],
				"magPic":[{
					"id":1,
					"img":"http://www.easyvoa.com/templets/images/studioclassroom/ad_mag.png"
				}]
			}
		})
	}
	
})

module.exports = router;
