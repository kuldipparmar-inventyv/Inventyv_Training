import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ICommandOutput } from './app.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements AfterViewInit {
  userInput: string = '';
  history: ICommandOutput[] = [];

  @ViewChild('terminalBody') private terminalBody!: ElementRef;
  @ViewChild('commandInput') private commandInput!: ElementRef;
  
  ngAfterViewInit(): void {
    this.focusInput();
  }

  handleCommand(): void {
    const rawInput = this.userInput.trim();
    if (!rawInput) return;

    const inputLower = rawInput.toLowerCase();
    
    if (inputLower === 'clear') {
      this.history = [];
      this.userInput = '';
      return;
    }

    let response = '';
    let isSuccess = true;
    let explanation = '';


    if (inputLower.startsWith('ng generate component ') || inputLower.startsWith('ng g c ')) {
      const parts = rawInput.split(' ');
      const compName = parts[parts.length - 1];
      response = `CREATE src/app/${compName}/${compName}.component.ts\nCREATE src/app/${compName}/${compName}.component.html\nUPDATE src/app/app.module.ts`;
      explanation = `Generated component: ${compName}`;
    } 
    else if (inputLower.startsWith('ng generate service ') || inputLower.startsWith('ng g s ')) {
      const parts = rawInput.split(' ');
      const serviceName = parts[parts.length - 1];
      response = `CREATE src/app/${serviceName}.service.spec.ts (360 bytes)\nCREATE src/app/${serviceName}.service.ts (135 bytes)`;
      explanation = `Generated service: ${serviceName}`;
    }
    else if (inputLower === 'ng build' || inputLower === 'ng b') {
      response = 'Building for production...\n✔ Browser bundle complete.\n✔ Statistics report generated.';
      explanation = 'Production build successful.';
    }
    else if (inputLower === 'ng serve' || inputLower === 'ng s') {
      response = 'Initial Chunk Files   | Names         | Size\nmain.js             | main          | 120 kB\nstyles.css          | styles        | 80 kB\n\nBuild at: 2026-01-27T09:50:00.000Z - Hash: a1b2c3d4e5\n** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **';
      explanation = 'Development server started.';
    }
    else if (inputLower === 'ng test' || inputLower === 'ng t') {
      response = 'Karma v6.4.0 server started at http://localhost:9876/\nLaunch Id: 12345678\n07 01 2026 10:00:00 [launcher]: Starting browser Chrome\n✔ Browser application bundle generation complete.\n22 specs, 0 failures';
      explanation = 'Unit tests executed.';
    }
    else if (inputLower === 'ng version' || inputLower === 'ng v') {
      response = 'Angular CLI: 17.0.0\nNode: 20.9.0\nPackage Manager: npm 10.1.0\nOS: win32 x64';
      explanation = 'Version info displayed.';
    }
    else if (inputLower === 'ng help' || inputLower === 'help') {
      response = 'Available commands:\n  ng generate component [name] (alias: ng g c)\n  ng generate service [name] (alias: ng g s)\n  ng serve (alias: ng s)\n  ng build (alias: ng b)\n  ng test (alias: ng t)\n  ng version (alias: ng v)\n  clear';
      explanation = 'Help menu displayed.';
    }
    else {
      response = `Command '${rawInput}' not found. Try 'ng help'.`;
      isSuccess = false;
      explanation = 'Unknown command.';
    }

    const newEntry: ICommandOutput = {
      input: rawInput,
      responseLines: [],
      success: isSuccess,
      explanation: explanation,
      timestamp: new Date()
    };

    this.history.push(newEntry);
    this.userInput = '';

    this.renderLines(response.split('\n'), newEntry);
  }

  renderLines(lines: string[], target: ICommandOutput): void {
    lines.forEach((line, index) => {
      setTimeout(() => {
        target.responseLines.push(line);
        this.scrollToBottom();
      }, index * 100); 
    });
  }

  public focusInput(): void {
    this.commandInput.nativeElement.focus();
  }

  scrollToBottom(): void {
    setTimeout(() => {
      const el = this.terminalBody.nativeElement;
      el.scrollTop = el.scrollHeight;
    }, 100);
  }
}