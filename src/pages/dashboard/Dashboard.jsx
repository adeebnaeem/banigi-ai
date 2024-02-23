import { NavLink, Outlet } from "react-router-dom"


const Dashboard = () => {
  return (
    <div className="dashboard">
   
        {/* --aside-- */}
      <aside className="sidebar">
        
        <ul>
            <li>

                <NavLink to={"/dashboard/page"}> page</NavLink>
            </li>
            <li>

                <NavLink to={"/dashboard/page2"}> page2</NavLink>
            </li>
            <li>

                <NavLink to={"/dashboard/page3"}> page3</NavLink>
            </li>
        </ul>
      </aside>
        {/* --//aside-- */}

      {/* --dashboard pages-- */}
       <main className="dashboardPages">
       <Outlet/>
       </main>
      {/* --//dashboard pages-- */}
    </div>
  )
}

export default Dashboard
