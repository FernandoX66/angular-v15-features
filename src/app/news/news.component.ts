import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {CommonModule} from "@angular/common";
import {PostsService} from "../services/posts.service";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>News Component</h2>
    <div *ngIf="posts$ | async as posts" class="posts-container">
      <div *ngFor="let post of posts" class="post">
        <h5>{{post.title}}</h5>
        <p>{{post.body}}</p>
      </div>
    </div>
  `,
  styles: [`
    .posts-container{
      height: 470px;
      overflow-y: auto;
      margin: 10px 0;

      &::-webkit-scrollbar {
        width: 10px;
        background: #e5e5e5;
        border-radius: 2px;
      }

      &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 2px;
      }

      .post {
        margin: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        box-shadow: 0 2px 3px #ccc;
      }
    }
  `],
})
export class NewsComponent implements OnInit {
  posts$!: Observable<any[]>;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.posts$ = this.postsService.getPosts();
  }
}
