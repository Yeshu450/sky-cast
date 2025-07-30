import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [city, setCity] = useState('');
	const [weather, setWeather] = useState(null);
	const [buttonClicked, setButtonClicked] = useState(false);
	const [temp, setTemp] = useState(false);

	const bgClass = weather
		? weather.current.is_day === 1
			? 'day-bg'
			: 'night-bg'
		: '';

	const url = 'https://api.weatherapi.com/v1/forecast.json';
	const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

	useEffect(() => {
		if (buttonClicked) {
			fetch(`${url}?key=${apiKey}&q=${city}`)
				.then((response) => response.json())
				.then((data) => {
					setWeather(data);
						setTemp(true);
						setButtonClicked(false);
                        setCity('');
				})
            }
	}, [buttonClicked]);

	return (
		<main className={bgClass} id='main'>
			<div id='clouds'>
				<img src='/cloud1.png' alt='cloud' className='cloud cloud1' />
				<img src='/cloud2.png' alt='cloud' className='cloud cloud2' />
				<img src='/cloud3.png' alt='cloud' className='cloud cloud3' />
				<img src='/cloud4.png' alt='cloud' className='cloud cloud4' />
			</div>
			<div id='body'>
				<div id='heading'>
					<h1>SKY CAST</h1>
				</div>
				<div id='parent1'>
					<input
						type='text'
						placeholder='Location... '
						value={city}
						onChange={(e) => {
							setCity(e.target.value);
						}}
					/>
					<button id='btn' onClick={() => {
        if (city.trim() === '') {
            alert('Please enter a valid location!');
        } else {
            setButtonClicked(true);
        }
    }}>
						Search
					</button>
				</div>
				<div id='parent2'>
					{temp && (
						<>
							<div className='child'>
								<div className='box1'>
									<img
										src={weather.current.condition.icon}
										alt='icon'
										id='img'
									/>
									<p>{weather.current.condition.text}</p>
								</div>
								<div className='box'>
									<div>
										<label>TEMP : </label>
										<span>
											{weather.current.temp_c} °C |{' '}
											{weather.current.temp_f} °F
										</span>
									</div>
									<div>
										<label>CITY : </label>
										<span>{weather.location.name}</span>
									</div>
									<div>
										<label>STATE : </label>
										<span>{weather.location.region}</span>
									</div>
									<div>
										<label>COUNTRY : </label>
										<span>{weather.location.country}</span>
									</div>
								</div>
								<div className='box'>
									<div>
										<label>WIND : </label>
										<span>
											{weather.current.wind_kph} km/h
										</span>
									</div>
									<div>
										<label>HUMIDITY : </label>
										<span>
											{weather.current.humidity} %
										</span>
									</div>
									<div>
										<label>PRESSURE : </label>
										<span>
											{weather.current.pressure_mb} mb
										</span>
									</div>
									<div>
										<label>PRECIPITATION : </label>
										<span>
											{weather.current.precip_in} mm
										</span>
									</div>
								</div>
								<div className='box'>
									<div>
										<label>SUNRISE : </label>
										<span>
											{
												weather.forecast.forecastday[0]
													.astro.sunrise
											}
										</span>
									</div>
									<div>
										<label>SUNSET : </label>
										<span>
											{
												weather.forecast.forecastday[0]
													.astro.sunset
											}
										</span>
									</div>
									<div>
										<label>M00NRISE : </label>
										<span>
											{
												weather.forecast.forecastday[0]
													.astro.moonrise
											}
										</span>
									</div>
									<div>
										<label>MOONSET : </label>
										<span>
											{
												weather.forecast.forecastday[0]
													.astro.moonset
											}
										</span>
									</div>
								</div>
							</div>
							<div className='child'>
								<div className='box'>
									<div>
										<label>DATE : </label>
										<span>
											{
												weather.forecast.forecastday[0]
													.date
											}
										</span>
									</div>
								</div>
								<div className='box'>
									<div>
										<label>MIN : </label>
										<span>
											{
												weather.forecast.forecastday[0]
													.day.mintemp_c
											}{' '}
											°C
										</span>
									</div>
								</div>
								<div className='box'>
									<div>
										<label>MAX : </label>
										<span>
											{
												weather.forecast.forecastday[0]
													.day.maxtemp_c
											}{' '}
											°C
										</span>
									</div>
								</div>
								<div className='box'>
									<div>
										<label>AVG : </label>
										<span>
											{
												weather.forecast.forecastday[0]
													.day.avgtemp_c
											}{' '}
											°C
										</span>
									</div>
								</div>
							</div>
							<div className='child'>
								{weather.forecast.forecastday[0].hour.map(
									(val, ind) => (
										<div className='box2'>
											<img
												src={val.condition.icon}
												alt='icon'
											/>
											<span>{val.temp_c} °C</span>
											<span>{val.time.slice(-5)}</span>
										</div>
									)
								)}
							</div>
						</>
					)}
				</div>
			</div>
		</main>
	);
}

export default App;
