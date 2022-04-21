import Wrapper from "./Wrapper";
import React from "react";

export default (props: {}) => <div
    className={"w-full bg-gray-200 mt-auto flex flex-col place-items-center py-8 text-xs text-neutral-500"}>
    <Wrapper>
        <div className={"flex gap-8"}>
            <div className={"flex-1"}>
                本網站嘅粵語、官話詞彙定義等引用<a href={"https://words.hk/zidin/"}>《粵典》粵語辭典計劃</a>
                同臺灣教育部嘅<a href={"https://dict.revised.moe.edu.tw/"}>重編國語辭典（修訂本）</a>資料，
                分別以<a href={"https://words.hk/base/hoifong/"}>《粵典》開放資料授權協議</a>
                同共享創意特許條款之「<a href={"https://creativecommons.org/licenses/by-sa/3.0/tw/deed"}>姓名標示-相同方式分享3.0台灣</a>」
                授權下轉載。
                <br/><br/>
                本網站粵語讀音等引用香港中文大學人文學科研究所嘅
                <a href={"http://humanum.arts.cuhk.edu.hk/Lexis/Canton2/"}>粵語音韻集成</a>
                、
                <a href={"https://humanum.arts.cuhk.edu.hk/Lexis/Canton/"}>粵音韻彙</a>
                、
                <a href={"https://humanum.arts.cuhk.edu.hk/Lexis/lexi-can/"}>粵語審音配詞字庫</a>
                同
                <a href={"http://humanum.arts.cuhk.edu.hk/Lexis/lexi-mf/"}>漢語多功能字庫</a>
                嘅資料，其版權歸香港中文大學人文學科研究所同優質教育基金所擁有。
                <br/><br/>
                特別鳴謝：香港粵語語料庫、香港大學語言學系、林璃蝶女士、劉擇明博士、Can Cheng、昭源字體
            </div>
            <div className={"flex-1"}>
                本網站之歷史粵語讀音同定義等亦引用
                <a href={"https://github.com/jyutnet/cantonese-books-data"}>《粵音資料集叢》</a>
                資料，其收錄典籍包括1855年《初學粵音切要》、1856年《英華分韻撮要》、 1914年《分部分音廣話九聲字宗》、
                1916年《廣話國語一貫未定稿》、1931年《民眾識字粵語拼音字彙》、1937年《中華新字典》、
                1939年《道漢字音》、1941年《粵音韻彙》、1941年《道字典》、1962年《廣州音字彙》、
                1967年《部身字典》檢字表、1971年《同音字彙》、1974年同1996年《粵語同音字典》嘅初版同增訂排印本、
                1988年《廣州話標準音字彙》、 1992年《常用字廣州話讀音表》、1994年《常用字廣州話異讀分類整理》
                同2004年《廣州話正音字典》， 其版權歸版權持有者所擁有。
            </div>
            <div className={"flex-1"}>
                本網站例句等引用<a href={"http://compling.hss.ntu.edu.sg/hkcancor/"}>香港粵語語料庫</a>資料，
                以共享創意特許條款之「<a href={"https://creativecommons.org/licenses/by/4.0/deed"}>姓名標示4.0國際</a>」
                授權下轉載
                <br/>
                <br/>
                本網站字型資料引用
                <a href={"https://unicode.org/charts/unihan.html"}>統一漢資料庫</a>（UniHan Database）、
                <a href={"http://glyphwiki.org/wiki/GlyphWiki:首頁"}>字形維基</a>（グリフウィキ(GlyphWiki)），
                其版權分別爲
                <a href={"https://home.unicode.org"}>統一碼聯盟</a>（Unicode Consortium）同字形維基營運者kamichi所擁有。
                <br/>
                <br/>
                本網站字型等亦引用
                <a href={"https://ctext.org/introduction/zh"}>中國哲學書電子化計劃</a>
                資料，其版權歸網頁持有者所擁有。
                <br/>
                <br/>
                本網站粵語讀音等亦轉載
                <a href={"https://ctext.org/introduction/zh"}>中國哲學書電子化計劃</a>
                資料，其版權歸網頁持有者所擁有。
            </div>
        </div>
    </Wrapper>
</div>
