
/*3766762380*/
/*
 * ===========================================================================================
 * COMPONENT: navbar
 * ===========================================================================================
 */

const activePage=window.location.pathname;console.log(activePage)const links=document.querySelectorAll('nav a').forEach((link)=>{if(link.href.includes(`${activePage}`)){link.classList.add("active")}});
/*3766762380*/