'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">github-users documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-89238ebe798069bf51d205aea6310c0441397f0fba1a7cf873ceea65a69e4591a18528de8bb2202ae195e8a8a2ce64505134ee22b86aa405d8662c32dfc5777f"' : 'data-bs-target="#xs-components-links-module-AppModule-89238ebe798069bf51d205aea6310c0441397f0fba1a7cf873ceea65a69e4591a18528de8bb2202ae195e8a8a2ce64505134ee22b86aa405d8662c32dfc5777f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-89238ebe798069bf51d205aea6310c0441397f0fba1a7cf873ceea65a69e4591a18528de8bb2202ae195e8a8a2ce64505134ee22b86aa405d8662c32dfc5777f"' :
                                            'id="xs-components-links-module-AppModule-89238ebe798069bf51d205aea6310c0441397f0fba1a7cf873ceea65a69e4591a18528de8bb2202ae195e8a8a2ce64505134ee22b86aa405d8662c32dfc5777f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link" >TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TabsPageModule-9a82605f2e76bb229ee6cae8f1a3128303e07ff362318f0d51c5f7a750ded065a7196a39b737aedc5b06c775053525b64ee9d0713eb3f28ff651ad3ed0f26ce4"' : 'data-bs-target="#xs-components-links-module-TabsPageModule-9a82605f2e76bb229ee6cae8f1a3128303e07ff362318f0d51c5f7a750ded065a7196a39b737aedc5b06c775053525b64ee9d0713eb3f28ff651ad3ed0f26ce4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-9a82605f2e76bb229ee6cae8f1a3128303e07ff362318f0d51c5f7a750ded065a7196a39b737aedc5b06c775053525b64ee9d0713eb3f28ff651ad3ed0f26ce4"' :
                                            'id="xs-components-links-module-TabsPageModule-9a82605f2e76bb229ee6cae8f1a3128303e07ff362318f0d51c5f7a750ded065a7196a39b737aedc5b06c775053525b64ee9d0713eb3f28ff651ad3ed0f26ce4"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link" >TabsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserPageModule.html" data-type="entity-link" >UserPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserPageModule-a3ddf56e25f7243802debec6f0d7fb09d9cdd6da7a592432e3fa6234aa5e468ea1bea459fc54435e1f9daef060abf7452956babd9ec749c587f7afba895797d5"' : 'data-bs-target="#xs-components-links-module-UserPageModule-a3ddf56e25f7243802debec6f0d7fb09d9cdd6da7a592432e3fa6234aa5e468ea1bea459fc54435e1f9daef060abf7452956babd9ec749c587f7afba895797d5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserPageModule-a3ddf56e25f7243802debec6f0d7fb09d9cdd6da7a592432e3fa6234aa5e468ea1bea459fc54435e1f9daef060abf7452956babd9ec749c587f7afba895797d5"' :
                                            'id="xs-components-links-module-UserPageModule-a3ddf56e25f7243802debec6f0d7fb09d9cdd6da7a592432e3fa6234aa5e468ea1bea459fc54435e1f9daef060abf7452956babd9ec749c587f7afba895797d5"' }>
                                            <li class="link">
                                                <a href="components/UserPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserPageRoutingModule.html" data-type="entity-link" >UserPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersPageModule.html" data-type="entity-link" >UsersPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UsersPageModule-f88f29f173679be45a6ae75e6758b3873eacc3bb88d5aea7f609a70f7f194bf8638780a721044114631387c93280e579557e0be8df282cb5e4f1d14a14bb51c1"' : 'data-bs-target="#xs-components-links-module-UsersPageModule-f88f29f173679be45a6ae75e6758b3873eacc3bb88d5aea7f609a70f7f194bf8638780a721044114631387c93280e579557e0be8df282cb5e4f1d14a14bb51c1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersPageModule-f88f29f173679be45a6ae75e6758b3873eacc3bb88d5aea7f609a70f7f194bf8638780a721044114631387c93280e579557e0be8df282cb5e4f1d14a14bb51c1"' :
                                            'id="xs-components-links-module-UsersPageModule-f88f29f173679be45a6ae75e6758b3873eacc3bb88d5aea7f609a70f7f194bf8638780a721044114631387c93280e579557e0be8df282cb5e4f1d14a14bb51c1"' }>
                                            <li class="link">
                                                <a href="components/UsersPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersPageRoutingModule.html" data-type="entity-link" >UsersPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertService.html" data-type="entity-link" >AlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchEffects.html" data-type="entity-link" >SearchEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserEffects.html" data-type="entity-link" >UserEffects</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/SearchItem.html" data-type="entity-link" >SearchItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchResult.html" data-type="entity-link" >SearchResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchState.html" data-type="entity-link" >SearchState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserByUsername.html" data-type="entity-link" >UserByUsername</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserState.html" data-type="entity-link" >UserState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});