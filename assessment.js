'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

userNameInput.onkeydown = onkeydown = event => {
    if (event.key === 'Enter') {
        assessment.onkcick();
    }
};

assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0){
        return;
    }
    //診断結果表示エリアの作成
    resultDivided.innerText = '';
    const header = document.createElement('h3');
    header.innnerText='診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
    //TODO ツイートエリア
    tweetDivided.innerText = '';
    const anchor = document.createElement('a');
    const hrefValue =
        'https://twitter.com/intent/tweet?button_hashtag=' +
        encodeURIComponent('あなたのいいところ') +
        '&ref_src=twsrc%5Etfw';
    
    anchor.setAttribute('href', hrefValue);
    anchor.setAttribute('class', 'twitter-hashtag-button');
    anchor.setAttribute('data-text', 'result');
    anchor.innerText = 'Tweet #あなたのいいところ';

    tweetDivided.appendChild(anchor);
    // widgets.jsの設定
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    tweetDivided.appendChild(script);
};

const answers = [
    '{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
    '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
    '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
    '{userName}のいいところは高慢さです。博識な{userName}を多くの人が頼りにしています。',
    '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
    '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
    '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
    '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
    '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
    '{userName}のいいところは単純さです。{userName}が感じたことに皆が共感し、わかりあうことができます。',
    '{userName}のいいところは節度です。強引すぎないさとに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
    '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
    '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
    '{userName}のいいところは無知さです。やばいと思ったときにしっかりと衝動を抑えられぬところ{userName}が皆から評価されています。'
]

function assessment(userName){
    let sumOfCharCode = 0;
    for (let i =0; i< userName.length; i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }
    const index = sumOfCharCode % answers.length;
    let result = answers[index];
    result = result.replaceAll('{userName}', userName);
    return result;
}