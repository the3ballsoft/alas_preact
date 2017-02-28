import { h, Component } from 'preact';
import style from './style';

export default class Profile extends Component {
	state = {
		count: 1,
    headings: [],
    next: 1
	};

  prevScrollPos = this.getScrollPos();
  updateInitiated = false;

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(::this.updateTime, 1000);
		this.updateTime();

		// every time we get remounted, increment a counter:
    this.setState({ count: this.state.count+1 });
    this.getHeadings(); //fetch alas api

    let self = this;
    window.onscroll = function(event) {
      self.handleScroll(event);
    }
    // For touch devices, try to detect scrolling by touching
    document.ontouchmove = function(event) {
      self.handleScroll(event);
    }
	}

  getScrollPos() {
    return window.pageYOffset;
  }

  handleScroll(ev){
    if (this.updateInitiated) {
      return;
    }  

    let scrollPos = this.getScrollPos();
    if(scrollPos == this.prevScrollPos) {
      return; // nothing to do
    }

    // Find the pageHeight and clientHeight(the no. of pixels to scroll to make the scrollbar reach max pos)
    let pageHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    
    // Check if scroll bar position is just 50px above the max, if yes, initiate an update
    if (pageHeight - (scrollPos + clientHeight) < 50) {
      this.updateInitiated = true;
      this.loadNextPage();
    }
    this.prevScrollPos = scrollPos;  
  }

  getHeadings(nextPage){
    const config = { 
      method: 'GET',
      //headers: new Headers({
        //Authorization : `Token cfea63bc1832c02e823a98c0db269d1e69548df2`
      //}),
      mode: 'cors'
    };

    const url = nextPage || `http://localhost:8000/api/v1/headings/?page=1`
    return fetch(url, config)
            .then(response => response.json())
            .then(value => {
              this.setState({ 
                headings: [...this.state.headings, ...value.results], 
                next: value.next
              });
              this.updateInitiated = false; 
            })
            .catch(err => console.log(err));
  }

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

  loadNextPage(){
    this.getHeadings(this.state.next);
  }

	// update the current time
	updateTime() {
		let time = new Date().toLocaleString();
		this.setState({ time });
    //window.scrollTo(0,document.body.scrollHeight);
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count, headings }) {
    const isMain = code => { (code && code.length == 5) }; 

		return (
			<div class={style.profile}>
				<h1>Partidas</h1>
				<div>Current time: { time }</div>
        <table class={style.table}>
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Titulo</th>
              <th>Grav.</th>
              <th>IVA</th>
              <th>RI</th>
              <th>U</th>
            </tr>
          </thead>
          <tbody>
            {
              headings.map(item => (
                <tr>
                  <td class={style.fstrong}>{item.code}</td>
                  <td>{item.title}</td>
                  <td class="short">{item.tax}{ item.tax ? (isNaN(item.tax) ? '' : '%') : '' }</td>
                  <td class="short">{item.iva}{ item.iva ? (isNaN(item.iva) ? '' : '%') : '' }</td>
                  <td class="short">{item.import_reg}</td>
                  <td class="short">{item.unit_symbol}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
			</div>
		);
	}
}
