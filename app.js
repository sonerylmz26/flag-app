// api  https://restcountries.com/v3.1/all

window.addEventListener("load", () => {
      getData();
    });
    
    // window.onload = function () {
    //   getData();
    
    // }
    let ülkeler;
    
    const getData = async () => {
      try {
        const URL = "https://restcountries.com/v3.1/all";
        const res = await fetch(URL);
        if (!res.ok) {
          throw new Error();
        }
        const data = await res.json();
        ülkeler = data;
        console.log(ülkeler);
        nameSelect(data);
    
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    
    const select = document.querySelector(".form-select");
    
    const nameSelect = (data) => {
      ülkeler.forEach((element) => {
        // console.log(element);
    
        select.innerHTML += `<option value=${element.name.common}>${element.name.common}</option>`;
      });
      // domaYaz(data)
    };
    
    select.addEventListener("change", (e) => {
      const selected = e.currentTarget.value;
      console.log(selected);
      if (selected) {
        // console.log(ülkeler);
        const secilenUlke = ülkeler.filter((item) => {
         return item.name.common === selected;
        });
        console.log(secilenUlke);
        domaYaz(secilenUlke[0])
      }
    });
    
    const domaYaz = (y) => {
      const {
      flags:{png},
      name: { common },
      region,
      capital,
      languages,
      currencies,
      population,
      borders,
      maps: { googleMaps },
    
      } = y;
    
      const cardSection = document.getElementById('cards')
      cardSection.innerHTML = `<div class="card m-auto mt-4 " style="width: 28rem">
                <img src="${png}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title text-center fs-2">${common}</h5>
                </div>
                    <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <i class="fa-solid fa-earth-oceania"></i><span class="fw-bold"> Region:</span> ${region}
                </li>
                <li class="list-group-item">
                  <i class="fas fa-lg fa-landmark"></i>
                  <span class="fw-bold"> Capitals:</span> ${capital}
                </li>
                <li class="list-group-item">
                  <i class="fas fa-lg fa-comments"></i>
                  <span class="fw-bold"> Languages:</span>${Object.values(
                    languages
                  )}
                </li>
                <li class="list-group-item">
                  <i class="fas fa-lg fa-money-bill-wave"></i>
                  <span class="fw-bold"> Currencies:</span> ${
                    Object.values(currencies)[0].name
                  }, ${Object.values(currencies)[0].symbol}
                </li>
                <li class="list-group-item">
                <i class="fa-solid fa-people-group"></i></i>
                <span class="fw-bold"> Population:</span> ${population}
              </li>
                <li class="list-group-item">
                <i class="fa-sharp fa-solid fa-road-barrier"></i>
                <span class="fw-bold"> Borders:</span> ${borders}
              </li>
              </li>
              <li class="list-group-item">
                <i class="fa-solid fa-map-location-dot"></i><span class="fw-bold"> Map:</span> <a href=${googleMaps}
                   target='_blank'> Go to google map</a> </li>
              </ul>
          </div>`;
    }