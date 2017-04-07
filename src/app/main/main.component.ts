import { Component } from '@angular/core';
import { Rower } from '../rower.model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

rowers: Rower[] = [
  new Rower("Zoe Chalker", 4, "Zoe has been rowing since she turned 12, and she loves the calm power of the sport. She is a verified powerhouse in the middle of the boat, helping the EBRC win races from the 4 seat.", "5'10", 1),
  new Rower("Elizabeth Stein", 5, "Elizabeth has only been rowing for 3 years, but her technique is improving and her erg times prove that she belongs in the varsity boat.", "5'11", 2),
  new Rower("Catherine Waller", 1, "Catherine, or Cat, is a happy-go-lucky rower who brings a sense of fun to the boat. She loves calm days on the water and being the first one to cross the finish line in a race!", "5'7", 3),
  new Rower("Tara Williams", 7, "Tara is truly a rower with heart. Always there to give a kind word to a boatmate after a tough race or congratulations for a PR, she is an asset to the team", "6'1", 4),
  new Rower("Jane Bodin", 8, "Jane is what everyone hopes for in a stroke seat: confident, powerful, and with an intuition for stroke-rate. She is a true leader both on and off the water.", "5'9", 5),
  new Rower("Elise Baker", 2, "Elise has been rowing for 5 years now, and her confidence shows. She has beautiful technique and is always quick to give others a hand.", "5'8", 6),
  new Rower("Sandra Abrams", 3, "Sandra loves any day she can spent out on the water, whether it's in the 8 or out on her sailboat. She is thrilled to be a part of the EBRC!", "6'0", 7),
  new Rower("Alex Fenley", 6, "Alex is a determined rower with several junior championships under her belt. She is the back-up stroke seat rower, and a force to be reckoned with.", "5'11", 8),
  new Rower("Lydia Paulson", 0, "The only thing Lydia loves more than coxing the Women's 8 is her dog, Mr. Bojangles. He is always at races to cheer her on, while she motivates and inspires her boat across the finish line.", "5'3", 9)
];
}
