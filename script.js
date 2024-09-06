function calculateDaifuku() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const baseDate = new Date(1900, 0, 31); // 1900年1月31日を基準日とする
    const ganCycle = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
    const daifukuMapping = {
        "甲": "さくらだいふく",
        "乙": "あんずだいふく",
        "丙": "いちごだいふく",
        "丁": "チョコだいふく",
        "戊": "きなこだいふく",
        "己": "くりだいふく",
        "庚": "まっちゃだいふく",
        "辛": "ブルーベリーだいふく",
        "壬": "みかんだいふく",
        "癸": "ぷりんだいふく"
    };
    
    const deltaDays = Math.floor((birthdate - baseDate) / (1000 * 60 * 60 * 24));
    const ganIndex = deltaDays % 10;
    const daifukuType = daifukuMapping[ganCycle[ganIndex]];
    
    document.getElementById('result').textContent = `あなたは ${daifukuType} です。`;
}
