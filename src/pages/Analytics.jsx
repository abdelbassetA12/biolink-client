import { useEffect, useState } from "react";
import axios from "axios";
import API_BASE from "../config/api";
import LoadingScreen from "../components/LoadingScreen";
import { useAuth } from "../context/AuthContext";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Analytics() {
  const { user } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!user) return;

    const fetchAnalytics = async () => {
      const res = await axios.get(
        `${API_BASE}/api/profile/analytics/${user.username}`
      );
      setData(res.data);
    };

    fetchAnalytics();
  }, [user]);

  if (!data) return <LoadingScreen />;

  const chartData = data.links.map(l => ({
    name: l.title,
    clicks: l.clicks || 0
  }));

  const totalClicks = data.totalClicks || 0;

  // 🧠 AI INSIGHT
  const getInsight = () => {
    if (totalClicks === 0) return "🧠 No data yet — start sharing 🚀";
    if (totalClicks < 20) return "🧠 You need more traffic 🚀";
    if (totalClicks < 100) return "📈 You're growing steadily";
    return "🔥 Great performance!";
  };

  // 🔥 SCORE
  const score = Math.min(100, Math.round((totalClicks / (data.links.length || 1)) * 10));

  // 🎯 GOAL
  const goal = 100;
  const progress = Math.min(100, (totalClicks / goal) * 100);

  // 📈 PREDICTION
  const prediction = Math.round((totalClicks / (data.links.length || 1)) * 1.4);


  const dailyData = Object.keys(data.daily || {}).map(d => ({
  date: d,
  clicks: data.daily[d]
}));

const countryData = Object.keys(data.countries || {}).map(c => ({
  country: c,
  clicks: data.countries[c]
}));
  return (
    <div className="analytics">

      {/* HEADER */}
      <div className="header">
        <h1>📊 Analytics Dashboard</h1>
        <p>Track your performance in real time</p>
      </div>


   



      

      {/* STATS */}
      <div className="stats">
        <Card title="Total Clicks" value={data.totalClicks} />
        <Card title="Total Links" value={data.totalLinks} />
       <Card title="Top Link" value={data.topLink?.title || "—"} />
        <Card title="Avg Clicks" value={
          data.links.length
            ? (totalClicks / data.links.length).toFixed(1)
            : 0
        } />
        <Card title="Score" value={`${score}/100`} />
      </div>
      {/* AI INSIGHTS */}
      <div className="insight">
        {getInsight()}
      </div>

      {/* GOAL + PREDICTION */}
      <div className="stats">
        <div className="card">
          <h4>🎯 Goal Progress</h4>
          <h2>{progress.toFixed(0)}%</h2>
          <div className="progress">
            <div className="fill" style={{ width: progress + "%" }} />
          </div>
        </div>

        <div className="card">
          <h4>📈 Prediction</h4>
          <h2>{prediction} clicks</h2>
          <small>next week estimate</small>
        </div>
      </div>

      {/* CHARTS */}
      <div className="grid">

        <div className="card">
          <h3>📈 Growth</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <XAxis dataKey="name" hide />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="clicks"
                stroke="#4f46e5"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>📊 Overview</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" hide />
              <Tooltip />
              <Bar dataKey="clicks" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* CHARTS */}
      <div className="grid">

        <div className="card">
          <h3>📅 Daily Clicks</h3>
  <ResponsiveContainer width="100%" height={250}>
    <LineChart data={dailyData}>
      <XAxis dataKey="date" />
      <Tooltip />
      <Line dataKey="clicks" stroke="#4f46e5" />
    </LineChart>
  </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>🌍 Countries</h3>
  <ResponsiveContainer width="100%" height={250}>
    <BarChart data={countryData}>
      <XAxis dataKey="country" />
      <Tooltip />
      <Bar dataKey="clicks" fill="#10b981" />
    </BarChart>
  </ResponsiveContainer>
        </div>

      </div>

      {/* 🔥 TOP LINKS (with progress) */}
      <div className="card big">
        <h3>🔥 Top Links</h3>

        {data.links
          .sort((a, b) => (b.clicks || 0) - (a.clicks || 0))
          .slice(0, 5)
          .map((l, i) => {
            const percent = data.totalClicks
              ? ((l.clicks || 0) / data.totalClicks) * 100
              : 0;

            return (
              <div key={l._id} className="link">

                <div className="row">
                  <span>#{i + 1} {l.title}</span>
                  <span>{l.clicks || 0} clicks</span>
                </div>

                <div className="progress">
                  <div
                    className="fill"
                    style={{ width: `${percent}%` }}
                  />
                </div>

                <div className="percent">
                  {percent.toFixed(1)}%
                </div>

              </div>
            );
          })}
      </div>

      {/* 📂 ALL LINKS (UNCHANGED) */}
      <div className="card big">
        <h3>📂 All Links</h3>

        <div className="table">
          <div className="thead">
            <span>Link</span>
            <span>Clicks</span>
            <span>Status</span>
          </div>

          {data.links
            .sort((a, b) => (b.clicks || 0) - (a.clicks || 0))
            .map((l) => (
              <div key={l._id} className="trow">
                <div className="linkTitle">🔗 {l.title}</div>

                <div className="clicks">
                  {l.clicks || 0}
                </div>

                <div>
                  <span className={l.active ? "badge active" : "badge off"}>
                    {l.active ? "Active" : "Off"}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* STYLE */}

      <style>{`
  .analytics {
    min-height: 100vh;
    padding: 24px;
    font-family: Inter, sans-serif;
    background: #f8fafc;
    color: #0f172a;
    overflow-x: hidden;
  }

  .header {
    margin-bottom: 24px;
  }

  .header h1 {
    margin: 0;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 800;
    line-height: 1.2;
  }

  .header p {
    color: #64748b;
    margin-top: 8px;
    font-size: 15px;
  }

  .insight {
    background: linear-gradient(135deg,#4f46e5,#6366f1);
    color: white;
    padding: 16px 18px;
    border-radius: 18px;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 15px;
    box-shadow: 0 10px 25px rgba(79,70,229,0.18);
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 18px;
    margin-bottom: 20px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
    margin-bottom: 20px;
  }

  .card {
    background: white;
    padding: 22px;
    border-radius: 22px;
    box-shadow: 0 10px 30px rgba(15,23,42,0.06);
    border: 1px solid rgba(226,232,240,0.7);
    transition: 0.25s ease;
    overflow: hidden;
  }

  .card:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 40px rgba(15,23,42,0.08);
  }

  .card h2 {
    margin-top: 10px;
    font-size: clamp(1.4rem, 3vw, 2rem);
    word-break: break-word;
  }

  .card h3 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 700;
  }

  .card h4 {
    margin: 0;
    font-size: 14px;
    color: #64748b;
    font-weight: 600;
  }

  .big {
    margin-top: 20px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 10px 0;
    border-bottom: 1px solid #f1f5f9;
    flex-wrap: wrap;
  }

  .row span:first-child {
    font-weight: 600;
    word-break: break-word;
  }

  .progress {
    height: 10px;
    background: #e5e7eb;
    border-radius: 999px;
    overflow: hidden;
    margin-top: 8px;
  }

  .fill {
    height: 100%;
    background: linear-gradient(90deg,#3b82f6,#6366f1);
    transition: width 0.5s ease;
    border-radius: inherit;
  }

  .percent {
    font-size: 12px;
    opacity: 0.7;
    margin-top: 6px;
    font-weight: 600;
  }

  .table {
    margin-top: 14px;
    width: 100%;
    overflow-x: auto;
  }

  .thead,
  .trow {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 10px;
    padding: 14px 12px;
    align-items: center;
    min-width: 600px;
  }

  .thead {
    font-weight: 700;
    color: #64748b;
    border-bottom: 1px solid #e5e7eb;
    background: #f8fafc;
    border-radius: 12px;
  }

  .trow {
    border-bottom: 1px solid #f1f5f9;
    transition: 0.2s ease;
  }

  .trow:hover {
    background: #f8fafc;
  }

  .linkTitle {
    font-size: 14px;
    font-weight: 600;
    word-break: break-word;
  }

  .clicks {
    font-weight: 700;
    color: #4f46e5;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 5px 12px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    white-space: nowrap;
  }

  .badge.active {
    background: #dcfce7;
    color: #166534;
  }

  .badge.off {
    background: #fee2e2;
    color: #991b1b;
  }

  .loading {
    padding: 40px;
  }

  /* ========================= */
  /* TABLETS */
  /* ========================= */

  @media (max-width: 992px) {
    .analytics {
      padding: 20px;
    }

    .grid {
      grid-template-columns: 1fr;
    }

    .card {
      padding: 20px;
    }
  }

  /* ========================= */
  /* MOBILE */
  /* ========================= */

  @media (max-width: 640px) {
    .analytics {
      padding: 14px;
    }

    .header {
      margin-bottom: 18px;
    }

    .header p {
      font-size: 14px;
    }

    .stats {
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .grid {
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .card {
      padding: 16px;
      border-radius: 18px;
    }

    .card h3 {
      font-size: 16px;
    }

    .row {
      flex-direction: column;
      align-items: flex-start;
    }

    .thead,
    .trow {
      min-width: 520px;
    }

    .table::-webkit-scrollbar {
      height: 6px;
    }

    .table::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 999px;
    }

    .insight {
      font-size: 14px;
      padding: 14px;
      border-radius: 16px;
    }
  }

  /* ========================= */
  /* VERY SMALL DEVICES */
  /* ========================= */

  @media (max-width: 420px) {
    .analytics {
      padding: 12px;
    }

    .card {
      padding: 14px;
    }

    .card h2 {
      font-size: 1.3rem;
    }

    .thead,
    .trow {
      min-width: 480px;
      font-size: 13px;
    }

    .badge {
      font-size: 11px;
      padding: 4px 10px;
    }
  }
`}</style>
      
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="card">
      <h4 style={{ opacity: 0.6 }}>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}

