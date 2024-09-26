import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    }, {
        path: "about",
        component: AboutComponent
    },
    {
        path: "portfolio",
        component: PortfolioComponent
    },
    {
        path: "services",
        component: ServicesComponent
    }, {
        path: "skills",
        component: SkillsComponent
    }, {
        path: "contact",
        component: ContactComponent
    }
];
