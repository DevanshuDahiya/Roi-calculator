import React, { useState } from 'react'
import '../css/style.css'

function Calculator() {

    const [selected, setSelected] = useState()
    const [time, settime] = useState(1)
    const [tier, settier] = useState(1)
    const [focus, setFocus] = useState(false)
    const [details, setDetails] = useState(false)
    const [amount, setamount] = useState('100.0 USD')
    const [popUp, setPopUp] = useState(true)


    const balTiles = [
        { id: 1, name: '$1000', },
        { id: 2, name: '$100', },
    ]

    const timeTiles = [
        { id: 1, name: '1 Day', },
        { id: 2, name: '7 Days', },
        { id: 3, name: '30 Days', },
        { id: 4, name: '1 year', },
        { id: 5, name: '5 years', },
    ]

    const tierTiles = [
        { id: 1, name: 'Tier 1', },
        { id: 2, name: 'Tier 2', },
        { id: 3, name: 'Tier 3', },
        { id: 4, name: 'Tier 4', },
        { id: 5, name: 'Tier 5', },
    ]

    const onChange = (e) => {
        setamount(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (!amount) {
            window.alert("Empty form can't be submitted !")
        }
        else window.alert('Applied amount is :' + amount)
    }

    return (
        <div className='container section' style={{ display: 'flex', flexDirection: 'column' }}>
            {popUp ?
                <div className='row' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className='col-md-6 calcCard' style={{ marginTop: 15, position: 'relative', alignSelf: 'center' }}>
                        <h5 style={{ marginBottom: 0, fontWeight: '700', fontSize: 22 }}>ROI Calculator</h5>
                        <div className='darkLink' style={{
                            position: 'absolute', right: 20, top: 10, marginTop: 0, fontSize: 20
                        }}
                            onClick={() => setPopUp(false)}
                        >
                            <i class="bi bi-x-lg"></i>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', width: 150, alignSelf: 'flex-end', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="images/calcIcon.png" alt="icon"></img>
                                <span style={{ color: '#808080', fontSize: 16, fontWeight: '600', marginLeft: 10 }}>Cake</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <img src="images/calcIcon.png" alt="icon"></img> */}
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                                </div>
                                <span style={{ color: '#808080', fontSize: 16, fontWeight: '600' }}>USD</span>
                            </div>
                        </div>

                        <div className='inputRect'>
                            <h5 style={{ marginBottom: 0, fontWeight: '700', fontSize: 20 }}>2.10000 CAKE</h5>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className='balTiles'>
                                USE BALANCE
                            </div>
                            {balTiles.map((item, index) =>
                                <div className='balTiles' key={index} style={{ backgroundColor: selected === item.id ? '#FFF9AA' : '#F8F8F8', cursor: 'pointer' }}
                                    onClick={() => {
                                        if(selected===item.id){
                                            setSelected('')
                                        }
                                        else setSelected(item.id)
                                        }}>
                                    {item.name}
                                </div>
                            )}
                            <span style={{ color: '#A3A3A3', fontSize: 14, margin: '0px 0px 15px 3px', fontWeight: '500', position: 'absolute', right: 20 }}> ~ $20.82</span>

                        </div>

                        <h6 style={{ color: '#000', fontSize: 14, fontWeight: '600', margin: '15px 0px 15px 3px' }}>Timeframe</h6>
                        <div className='spaceBtwRes' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                            {timeTiles.map((item, index) =>
                                <div className='timeTiles' key={index} style={{
                                    backgroundColor: time === item.id ? '#FFF9AA' : '#F9FAFB', cursor: 'pointer',
                                    border: time === item.id ? '1px solid #FED700' : '1px solid #F9FAFB'
                                }}
                                    onClick={() => settime(item.id)}>
                                    {item.name}
                                </div>
                            )}
                        </div>


                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                            <h6 style={{ color: '#000', fontSize: 16, fontWeight: '500', margin: '15px 0px 15px 3px' }}> Enable Accelerated APY</h6>
                            <div class="form-check form-switch ">
                                <input class="form-check-input switchHeight" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                            </div>
                        </div>
                        <span style={{ color: '#A3A3A3', fontSize: 14, margin: '0px 0px 15px 3px', fontWeight: '500' }}>Select Tier</span>
                        <div className='spaceBtwRes' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                            {tierTiles.map((item, index) =>
                                <div className='timeTiles' key={index} style={{
                                    backgroundColor: tier === item.id ? '#FFF9AA' : '#F9FAFB', cursor: 'pointer',
                                    border: tier === item.id ? '1px solid #FED700' : '1px solid #F9FAFB'
                                }}
                                    onClick={() => settier(item.id)}>
                                    {item.name}
                                </div>
                            )}
                        </div>

                        <span style={{ color: '#A3A3A3', fontSize: 14, margin: '15px 0px 15px 0px', fontWeight: '500', alignSelf: 'flex-end' }}>ROI at Current Rates</span>

                        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={(e) => onSubmit(e)}>
                            <div className='inputWrapper' style={{ border: focus == true ? '1px solid #FDE100' : '1px solid #ECECEC' }}>
                                <i class="bi bi-pencil" style={{ color: '#A8A8A8' }}></i>
                                <input type='text' placeholder="Enter amount" name="username" value={amount} onChange={e => onChange(e)}
                                    onFocus={() => setFocus(true)}
                                    onBlur={() => setFocus(false)}
                                ></input>
                            </div>

                            <span style={{ color: '#A3A3A3', fontSize: 14, margin: '15px 0px 15px 0px', fontWeight: '500', alignSelf: 'flex-end' }}>~ 3CAKE + 10 DON</span>

                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                                <button type='submit' className="themeButton" style={{
                                    marginTop: 20, marginRight: 10, width: '45%',
                                }}
                                >Apply</button>
                                <div className="secondaryBtn" style={{
                                    marginTop: 20, marginLeft: 10, width: '45%',
                                }}>Cancel</div>
                            </div>
                        </form>

                        <p>
                            <div class="darkLink" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"
                                onClick={() => setDetails(!details)}>
                                {!details ? 'Show details' : 'Hide details'} <i class="bi bi-chevron-down"></i>
                            </div>
                        </p>
                        <div class="collapse" id="collapseExample">
                            <div class="">
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                                    <h6 style={{ color: '#000', fontSize: 16, fontWeight: '500', }}>APY</h6>
                                    <span style={{ color: '#FAC200', fontSize: 18, fontWeight: '800' }}>63.34%</span>
                                </div>
                                <ul>
                                    <li style={{ color: '#A3A3A3', fontWeight: '500' }}>Calculated based on current rates</li>
                                    <li style={{ color: '#A3A3A3', fontWeight: '500' }}>All fugures are estimates provided for your convenience only,
                                        and by no means represent guaranted returns.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <hr class="dropdown-divider" style={{ margin: 30, backgroundColor: "#aaa" }}></hr> */}
                    </div>
                </div>
                :
                <div className="themeButton" style={{
                    alignSelf: 'center',
                    marginTop: 20, marginRight: 10, width: '45%',
                }}
                    onClick={() => setPopUp(true)}
                >Show Calculator</div>
            }
        </div >
    )
}

export default Calculator