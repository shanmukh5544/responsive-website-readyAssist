import { Component } from '@angular/core';
import {faHandshake} from '@fortawesome/free-regular-svg-icons'
import {faHouse ,faArrowAltCircleRight, faBars,faRightFromBracket , faIdCard , faCloudArrowDown , faObjectGroup} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faLinkedin,faPinterest,faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReadyAssist';
  faHouse = faHouse
  faRight = faRightFromBracket
  faCircle = faHandshake
  faContact = faIdCard
  faGrid = faObjectGroup
  faFacebook = faFacebook
  faInstagram = faInstagram
  faTwitter = faTwitter
  faPinterest = faPinterest
  faLinkedin = faLinkedin
  faBars = faBars
  faArrow = faArrowAltCircleRight


	 ngOnInit() {
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"2591ba4d5390bdb382b2e8e003f34aabf","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        (window as any ).kommunicate = m; m._globals = kommunicateSettings;
    })(document, (window as any ).kommunicate || {});
  }
  
}
