import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParentService } from '../../../../parent.service';
import { Parent } from '../../../../model/parent';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  allParents: Parent[] = []; // Provide a type for allParents
  parentDetailsForm!: FormGroup;
  totalParents: number = 0;

  constructor(private fb: FormBuilder, private parentService: ParentService) {}

  ngOnInit(): void {
    this.parentDetailsForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      contact: ['', [Validators.required]], // Corrected form control name
      relationship: ['', [Validators.required]],
      student_name: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });

    this.getParents(); // Fetch parents when component initializes
  }

  getParents(): void {
    this.parentService.getParents().subscribe(
      (parents: Parent[]) => { // Corrected the type of parents
        this.allParents = parents;
        this.totalParents = this.allParents.length; // Update totalParents variable
      },
      (error: any) => {
        console.error('Error fetching parents:', error);
      }
    );
  }

  addNewParent() {
    if (this.parentDetailsForm.valid) {
      const newParent: Parent = {
        first_name: this.parentDetailsForm.value.first_name,
        last_name: this.parentDetailsForm.value.last_name,
        contact: this.parentDetailsForm.value.contact, // Corrected property name
        relationship: this.parentDetailsForm.value.relationship,
        student_name: this.parentDetailsForm.value.student_name,
        address: this.parentDetailsForm.value.address,
      };

      this.parentService.addParent(newParent).subscribe(
        (parent: Parent) => { // Corrected the type of parent
          this.allParents.push(parent);
        },
        (error: any) => {
          console.error('Error adding parent:', error);
        }
      );
    }
  }
}
