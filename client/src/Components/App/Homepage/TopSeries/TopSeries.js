import React from "react";
import "./TopSeries.css"

function TopSeries({ top100Films }) {

    return (
    <div className="TopSeries">
        <h3>Top Series</h3>
        <li className="card"><a href="/movies">
            <div className="card_flipper">
                <div className="card_front">
                    <img src={require('../../../img/logo.png')} alt="logo" className="cardImage"/>
                    <div className="info">
                        <h3 className="subj">Movie Name</h3>
                        <p className="grade_area">
                            <span className="ico_like3">like</span><em className="grade_num">777,289</em>
                        </p>
                        <p className="icon_area"></p>
                    </div>
                    <span className="genre g_romance">Romance</span>
                </div>
                <div className="card_back g_romance">
                    <div className="info">
                        <h3 className="subj">Marry My Husband</h3>
                        <p className="author">sungsojak / LICO</p>
                        <p className="line"></p>
                        <p className="summary">When Jiwon, a 37-year-old cancer patient, walks in on her husband and best friend, she realizes her whole life has been a lie. What’s worse, she dies a tragic death at the hands o...</p>
                    </div>
                </div>
            </div>
        </a></li>
    </div>
  );
}

export default TopSeries;



<li><a href="/movies">
        <div className="card_flipper">
            <div className="card_front">
                <img src={require('../../../img/logo.png')} alt="logo" width="210" height="210"/>
                <div className="info">
                    <h3 className="subj">Marry My Husband</h3>
                    <p className="grade_area">
                        <span className="ico_like3">like</span><em className="grade_num">777,289</em>
                    </p>
                    <p className="icon_area"></p>
                </div>
                <span className="genre g_romance">Romance</span>
            </div>
            <div className="card_back g_romance">
                <div className="info">
                    <h3 className="subj">Marry My Husband</h3>
                    <p className="author">sungsojak / LICO</p>
                    <p className="line"></p>
                    <p className="summary">When Jiwon, a 37-year-old cancer patient, walks in on her husband and best friend, she realizes her whole life has been a lie. What’s worse, she dies a tragic death at the hands o...</p>
                </div>
            </div>
        </div>
</a></li>