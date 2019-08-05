import { Component, OnInit, ViewChild } from '@angular/core';
import { IssueService } from 'src/app/services/issue.service';
import { Issue } from '../../models/Issue';
import { MatTableDataSource} from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})

export class IssueComponent implements OnInit {

  displayedColumns = ['title','body','user' ,'assignee'];
  issueList: any;

  dataSource: MatTableDataSource< Issue>;
 
@ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;
  constructor(private issueService: IssueService) { 
  }

  

  ngOnInit() {
    
    this.issueService.getIssues().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      
    })
    
    

  }
  
}



//export class IssueDataSource extends MatTableDataSource<Issue> {

  

/*constructor(private issueService: IssueService){
  super();
}
connect(): Observable<Issue[]> {
  console.log(this.issueService.getIssues);
  return this.issueService.getIssues();
} 
disconnect(){}*/
//} 
