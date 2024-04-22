import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../../models/game';
import { GameService } from '../firebase-services/game.service';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss',
})
export class StartScreenComponent {
  public gameID!: string;
  constructor(private gameService: GameService, public router: Router) {}

  offset = -130;
  newGame() {
    let game = new Game();
    this.gameService.addGame(game.toJson());
    this.gameID = this.gameService.games[this.gameService.games.length - 1]['id'];
    console.log(this.gameID);
    
    this.router.navigateByUrl('/game/' + this.gameID);

  }
}
