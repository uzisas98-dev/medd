export const MERMAID_CHART = `---
config:
  layout: elk
  look: handDrawn
  theme: mc
---
flowchart TB
 subgraph Markets["📈 Market Data"]
        MktData["NYSE/NASDAQ<br>Real-time feeds<br>Order book data<br>FIX Protocol"]
  end
 subgraph News["📰 News & Media"]
        NewsData["Reuters, Bloomberg<br>Financial Times<br>Press Releases<br>SEC Edgar"]
  end
 subgraph Social["🔗 Social Intelligence"]
        SocialData["Twitter/X API<br>Reddit/WSB<br>StockTwits<br>Discord channels"]
  end
 subgraph Supply["🚢 Supply Chain Data"]
        SupplyData["MarineTraffic API<br>Flexport/Fourkites<br>Port authorities<br>Shipping costs"]
  end
 subgraph Satellite["🛰️ Satellite Imagery"]
        SatData["Maxar/Planet Labs<br>Google Maps<br>Parking lots<br>Factory activity"]
  end
 subgraph SEC["⚖️ SEC & Legal"]
        SECData["Form 4, 13D, 13F<br>PACER courts<br>Patent databases<br>LexisNexis"]
  end
 subgraph Macro["📊 Macro Data"]
        MacroData["FRED database<br>BLS employment<br>Fed minutes<br>IMF data"]
  end
 subgraph Alternative["🔍 Alternative Data"]
        AltData["Glassdoor reviews<br>Trustpilot ratings<br>Crunchbase jobs<br>LinkedIn API"]
  end
 subgraph External["🌐 REAL-TIME DATA SOURCES"]
        Markets
        News
        Social
        Supply
        Satellite
        SEC
        Macro
        Alternative
  end
 subgraph Ingestion["📥 DATA INGESTION LAYER"]
        Kafka["Apache Kafka<br>1M+ msg/sec<br>3 Brokers<br>3-day retention"]
        Redis["Redis Cluster<br>100GB RAM<br>Sub-millisecond<br>Real-time cache"]
        S3["AWS S3 Data Lake<br>100TB+ Parquet<br>Versioned storage<br>Compliance"]
        TSDB["TimescaleDB<br>Tick-by-tick data<br>1 second granularity<br>Compression"]
  end
 subgraph AI_Fund["📊 AI-1: Fundamental"]
        AI1_Input["Earnings data<br>Revenue growth<br>Cash flow<br>Balance sheet"]
        AI1_Model["LSTM Network<br>FB Prophet<br>Random Forest<br>Ensemble"]
        AI1_Output["Score: 0-100<br>Confidence: %<br>Trend signal"]
  end
 subgraph AI_Geo["🌍 AI-2: Geopolitical"]
        AI2_Input["News sentiment<br>Conflict events<br>Trade policies<br>Sanctions"]
        AI2_Model["BERT NLP<br>Graph Networks<br>Event detection<br>Timeline analysis"]
        AI2_Output["Risk: 0-100<br>Region impact<br>Duration est"]
  end
 subgraph AI_Tech["📈 AI-3: Technical"]
        AI3_Input["Candlestick<br>Volume patterns<br>Order book<br>Microstructure"]
        AI3_Model["CNN pattern<br>LSTM sequence<br>Computer Vision<br>HMM regimes"]
        AI3_Output["Score: -100~+100<br>Entry/Exit<br>Confidence"]
  end
 subgraph AI_Quant["⚙️ AI-4: Quantitative"]
        AI4_Input["Historical prices<br>Volatility<br>Correlations<br>Factors"]
        AI4_Model["XGBoost<br>GARCH model<br>Kalman filter<br>RL strategy"]
        AI4_Output["Position size<br>Risk parity<br>Hedge ratio"]
  end
 subgraph AI_Sent["💬 AI-5: Sentiment"]
        AI5_Input["News articles<br>Social posts<br>Analyst notes<br>Earnings calls"]
        AI5_Model["FinBERT<br>GPT-4 analysis<br>Aspect sentiment<br>Fake detection"]
        AI5_Output["Sentiment: -100~+100<br>Confidence<br>Trend"]
  end
 subgraph AI_Persona["👔 AI-6: CEO Persona"]
        AI6_Input["Earnings calls<br>Background<br>Track record<br>Media"]
        AI6_Model["NLP deep dive<br>Regression vs<br>performance<br>Pattern match"]
        AI6_Output["CEO Score: 0-100<br>Vision quality<br>Risk appetite"]
  end
 subgraph AI_Policy["🏛️ AI-7: Gov Policy"]
        AI7_Input["Fed minutes<br>FOMC decisions<br>Congressional bills<br>Regulations"]
        AI7_Model["NLP parsing<br>Timeline impact<br>Historical<br>precedent"]
        AI7_Output["Policy direction<br>Market impact<br>Timeline"]
  end
 subgraph AI_Inst["🏦 AI-8: Institutional"]
        AI8_Input["13F filings<br>Fund flows<br>Analyst upgrades<br>Price targets"]
        AI8_Model["Network analysis<br>Flow prediction<br>Co-movement<br>tracking"]
        AI8_Output["Smart money<br>sentiment<br>Crowding risk"]
  end
 subgraph AI_Lead["🎯 AI-9: Leadership"]
        AI9_Input["Board makeup<br>Compensation<br>Governance score<br>History"]
        AI9_Model["Regression<br>governance vs<br>performance<br>rating"]
        AI9_Output["Leadership score<br>Governance<br>quality"]
  end
 subgraph AICore["🧠 CORE AI MODULES (9 Existing)"]
        AI_Fund
        AI_Geo
        AI_Tech
        AI_Quant
        AI_Sent
        AI_Persona
        AI_Policy
        AI_Inst
        AI_Lead
  end
 subgraph AI_Supply["🚢 AI-10: Supply Chain"]
        AI10_Input["Ship tracking<br>Port congestion<br>Raw material<br>supplier health"]
        AI10_Model["GNN networks<br>Time series<br>anomaly detect<br>bottleneck id"]
        AI10_Output["Supply risk<br>disruption prob<br>cost impact"]
  end
 subgraph AI_Competitor["🎯 AI-11: Competitor"]
        AI11_Input["Job postings<br>Patents filed<br>Ad spending<br>price changes"]
        AI11_Model["CV website<br>comparison<br>NLP job parse<br>tech stack"]
        AI11_Output["Competitive<br>advantage score<br>threat level"]
  end
 subgraph AI_Regulatory["⚖️ AI-12: Regulatory"]
        AI12_Input["Active lawsuits<br>SEC investigate<br>antitrust cases<br>fines"]
        AI12_Model["Legal NLP<br>precedent match<br>timeline predict<br>settlement trend"]
        AI12_Output["Regulatory risk<br>cost estimate<br>timeline"]
  end
 subgraph AI_Insider["💰 AI-13: Insider Trading"]
        AI13_Input["Form 4 filings<br>Trade patterns<br>timing analysis<br>confidence"]
        AI13_Model["Pattern class<br>Bayesian prob<br>timing predict<br>accumulation"]
        AI13_Output["Insider conf<br>-100 to +100<br>trade signal"]
  end
 subgraph AI_Activist["⭐ AI-14: Activist"]
        AI14_Input["13D filings<br>Campaign news<br>board demands<br>accum pattern"]
        AI14_Model["Network graph<br>outcome predict<br>stock impact<br>timeline"]
        AI14_Output["Catalyst prob<br>restructure%<br>price target"]
  end
 subgraph AI_Customer["👥 AI-15: Customer"]
        AI15_Input["NPS scores<br>reviews/ratings<br>churn signals<br>support tickets"]
        AI15_Model["Sentiment NLP<br>churn ML<br>topic model<br>trend forecast"]
        AI15_Output["Health score<br>churn risk<br>satisfaction"]
  end
 subgraph AI_RealEstate["🏢 AI-16: Real Estate"]
        AI16_Input["Satellite images<br>foot traffic<br>property deals<br>occupancy"]
        AI16_Model["Computer Vision<br>image analysis<br>geospatial<br>time series"]
        AI16_Output["Utilization%<br>expansion plans<br>efficiency"]
  end
 subgraph AI_ESG["🌍 AI-17: ESG/Carbon"]
        AI17_Input["Carbon reports<br>ESG ratings<br>climate risks<br>compliance"]
        AI17_Model["ESG predict<br>climate scenario<br>transition risk<br>rating"]
        AI17_Output["ESG score<br>carbon risk<br>compliance"]
  end
 subgraph AI_MacroCycle["📊 AI-18: Macro Cycle"]
        AI18_Input["Yield curve<br>employment<br>spending data<br>indicators"]
        AI18_Model["HMM cycle<br>Bayesian nets<br>ML predict<br>spread analysis"]
        AI18_Output["Cycle stage<br>allocation%<br>confidence"]
  end
 subgraph AINew["🚀 NEW AI MODULES (9 Additions)"]
        AI_Supply
        AI_Competitor
        AI_Regulatory
        AI_Insider
        AI_Activist
        AI_Customer
        AI_RealEstate
        AI_ESG
        AI_MacroCycle
  end
 subgraph Fusion["🔄 SIGNAL FUSION ENGINE"]
        Collect["STAGE 1: COLLECT<br>Gather 18 signals<br>Scores + Confidence<br>Timestamps"]
        Conflict["STAGE 2: CONFLICT<br>Resolution rules<br>Priority weighting<br>Risk override"]
        DynWeight["STAGE 3: DYNAMIC<br>WEIGHT<br>Bull/Bear/Neutral<br>VIX-based shift<br>Regime detect"]
        Scenario["STAGE 4: SCENARIO<br>Base case: 60%<br>Bull case: 25%<br>Bear case: 15%"]
        FinalSignal["STAGE 5: FINAL<br>COMPOSITE<br>Direction<br>Strength<br>Confidence"]
  end
 subgraph RiskMgmt["⚠️ RISK MANAGEMENT"]
        PreTrade["PRE-TRADE<br>✓ Pos limit: 5%<br>✓ Sector: 30%<br>✓ VaR: $500K<br>✓ Leverage: 1.5x"]
        MonteCarlo["MONTE CARLO<br>10,000 sims<br>VaR/CVaR<br>Stress test<br>Tail risk"]
        RealTime["REAL-TIME<br>Every 1 sec<br>Circuit break<br>Position trim<br>Stop loss"]
  end
 subgraph DualBrain["🎯 DUAL BRAIN SYSTEM"]
        Investor["INVESTOR BRAIN<br>━━━━━━━━━━━━<br>Horizon: 3-12mo<br>Focus: Allocation<br>━<br>INPUT WEIGHTS:<br>Fund: 40%<br>Geo: 20%<br>Persona: 15%<br>Policy: 10%<br>Inst: 10%<br>Supply: 5%<br>━<br>OUTPUT:<br>Portfolio %<br>Sector %<br>Hedge plan"]
        Trader["TRADER BRAIN<br>━━━━━━━━━━━━<br>Horizon: min/hrs<br>Focus: Execution<br>━<br>INPUT WEIGHTS:<br>Technical: 40%<br>Quant: 30%<br>Sentiment: 20%<br>Customer: 5%<br>Insider: 5%<br>━<br>OUTPUT:<br>VWAP/POV<br>Smart route<br>Entry/exit"]
        Sync["SYNC LAYER<br>━━━━━━━━━━━━<br>✓ Alignment<br>✓ Risk limit<br>✓ Cost<br>✓ Liquidity<br>✓ Conflict<br>   resolution"]
  end
 subgraph Execution["⚡ EXECUTION LAYER"]
        OrderGen["ORDER GEN<br>Position size<br>Risk calc<br>Approval"]
        Algo["ALGORITHM<br>VWAP/POV/IS<br>Iceberg<br>TWAP"]
        Route["SMART ROUTE<br>NYSE 60%<br>NASDAQ 30%<br>Dark 10%"]
        Monitor["REAL-TIME<br>Live P&amp;L<br>Slippage<br>Adapt"]
        PostTrade["POST-TRADE<br>TCA<br>Attribution<br>Quality"]
  end
 subgraph Learning["🔄 LEARNING LOOP"]
        Collect_L["COLLECT<br>Trade data<br>Signal acc<br>Model drift"]
        Pattern["PATTERN<br>New signals?<br>Anomalies?<br>Regime shift?"]
        Retrain["RETRAIN<br>Weekly<br>Monthly<br>Quarterly"]
        Adapt["ADAPT<br>Weight shift<br>Strategy<br>Rules update"]
        Deploy["DEPLOY<br>A/B test<br>Gradual<br>rollout"]
  end
 subgraph Storage["💾 STORAGE LAYER"]
        FeatureStore["Feature Store<br>Model inputs<br>ML training<br>Versioning"]
        Analytics["Analytics DB<br>Aggregated<br>Reporting<br>BI dashboards"]
        Archive["Archive<br>S3 Glacier<br>Compliance<br>Audit trail"]
  end
    MktData --> Kafka
    NewsData --> Kafka
    SocialData --> Kafka
    SupplyData --> Kafka
    SatData --> Kafka
    SECData --> Kafka
    MacroData --> Kafka
    AltData --> Kafka
    Kafka --> Redis & S3 & TSDB
    Redis --> AI1_Input & AI2_Input & AI3_Input & AI4_Input & AI5_Input & AI6_Input & AI7_Input & AI8_Input & AI9_Input & AI10_Input & AI11_Input & AI12_Input & AI13_Input & AI14_Input & AI15_Input & AI16_Input & AI17_Input & AI18_Input
    AI1_Input --> AI1_Model
    AI1_Model --> AI1_Output
    AI2_Input --> AI2_Model
    AI2_Model --> AI2_Output
    AI3_Input --> AI3_Model
    AI3_Model --> AI3_Output
    AI4_Input --> AI4_Model
    AI4_Model --> AI4_Output
    AI5_Input --> AI5_Model
    AI5_Model --> AI5_Output
    AI6_Input --> AI6_Model
    AI6_Model --> AI6_Output
    AI7_Input --> AI7_Model
    AI7_Model --> AI7_Output
    AI8_Input --> AI8_Model
    AI8_Model --> AI8_Output
    AI9_Input --> AI9_Model
    AI9_Model --> AI9_Output
    AI10_Input --> AI10_Model
    AI10_Model --> AI10_Output
    AI11_Input --> AI11_Model
    AI11_Model --> AI11_Output
    AI12_Input --> AI12_Model
    AI12_Model --> AI12_Output
    AI13_Input --> AI13_Model
    AI13_Model --> AI13_Output
    AI14_Input --> AI14_Model
    AI14_Model --> AI14_Output
    AI15_Input --> AI15_Model
    AI15_Model --> AI15_Output
    AI16_Input --> AI16_Model
    AI16_Model --> AI16_Output
    AI17_Input --> AI17_Model
    AI17_Model --> AI17_Output
    AI18_Input --> AI18_Model
    AI18_Model --> AI18_Output
    AI1_Output --> Collect
    AI2_Output --> Collect
    AI3_Output --> Collect
    AI4_Output --> Collect
    AI5_Output --> Collect
    AI6_Output --> Collect
    AI7_Output --> Collect
    AI8_Output --> Collect
    AI9_Output --> Collect
    AI10_Output --> Collect
    AI11_Output --> Collect
    AI12_Output --> Collect
    AI13_Output --> Collect
    AI14_Output --> Collect
    AI15_Output --> Collect
    AI16_Output --> Collect
    AI17_Output --> Collect
    AI18_Output --> Collect
    Collect --> Conflict
    Conflict --> DynWeight
    DynWeight --> Scenario
    Scenario --> FinalSignal
    FinalSignal --> PreTrade
    PreTrade --> MonteCarlo
    MonteCarlo --> RealTime
    RealTime --> Investor & Trader
    Investor --> Sync
    Trader --> Sync
    Sync --> OrderGen
    OrderGen --> Algo
    Algo --> Route
    Route --> Monitor
    Monitor --> PostTrade
    PostTrade --> Collect_L & FeatureStore & Analytics
    Collect_L --> Pattern
    Pattern --> Retrain
    Retrain --> Adapt
    Adapt --> Deploy
    Deploy -. Feedback .-> AI1_Model & AI2_Model & AI3_Model & AI4_Model & AI5_Model & AI6_Model & AI7_Model & AI8_Model & AI9_Model & AI10_Model & AI11_Model & AI12_Model & AI13_Model & AI14_Model & AI15_Model & AI16_Model & AI17_Model & AI18_Model
    TSDB --> FeatureStore
    S3 --> Archive

     MktData:::externalStyle
     NewsData:::externalStyle
     SocialData:::externalStyle
     SupplyData:::externalStyle
     SatData:::externalStyle
     SECData:::externalStyle
     MacroData:::externalStyle
     AltData:::externalStyle
     Kafka:::ingestionStyle
     Redis:::ingestionStyle
     S3:::ingestionStyle
     TSDB:::ingestionStyle
     AI1_Input:::aiCoreStyle
     AI1_Model:::aiCoreStyle
     AI1_Output:::aiCoreStyle
     AI2_Input:::aiCoreStyle
     AI2_Model:::aiCoreStyle
     AI2_Output:::aiCoreStyle
     AI3_Input:::aiCoreStyle
     AI3_Model:::aiCoreStyle
     AI3_Output:::aiCoreStyle
     AI4_Input:::aiCoreStyle
     AI4_Model:::aiCoreStyle
     AI4_Output:::aiCoreStyle
     AI5_Input:::aiCoreStyle
     AI5_Model:::aiCoreStyle
     AI5_Output:::aiCoreStyle
     AI6_Input:::aiCoreStyle
     AI6_Model:::aiCoreStyle
     AI6_Output:::aiCoreStyle
     AI7_Input:::aiCoreStyle
     AI7_Model:::aiCoreStyle
     AI7_Output:::aiCoreStyle
     AI8_Input:::aiCoreStyle
     AI8_Model:::aiCoreStyle
     AI8_Output:::aiCoreStyle
     AI9_Input:::aiCoreStyle
     AI9_Model:::aiCoreStyle
     AI9_Output:::aiCoreStyle
     AI10_Input:::aiNewStyle
     AI10_Model:::aiNewStyle
     AI10_Output:::aiNewStyle
     AI11_Input:::aiNewStyle
     AI11_Model:::aiNewStyle
     AI11_Output:::aiNewStyle
     AI12_Input:::aiNewStyle
     AI12_Model:::aiNewStyle
     AI12_Output:::aiNewStyle
     AI13_Input:::aiNewStyle
     AI13_Model:::aiNewStyle
     AI13_Output:::aiNewStyle
     AI14_Input:::aiNewStyle
     AI14_Model:::aiNewStyle
     AI14_Output:::aiNewStyle
     AI15_Input:::aiNewStyle
     AI15_Model:::aiNewStyle
     AI15_Output:::aiNewStyle
     AI16_Input:::aiNewStyle
     AI16_Model:::aiNewStyle
     AI16_Output:::aiNewStyle
     AI17_Input:::aiNewStyle
     AI17_Model:::aiNewStyle
     AI17_Output:::aiNewStyle
     AI18_Input:::aiNewStyle
     AI18_Model:::aiNewStyle
     AI18_Output:::aiNewStyle
     Collect:::fusionStyle
     Conflict:::fusionStyle
     DynWeight:::fusionStyle
     Scenario:::fusionStyle
     FinalSignal:::fusionStyle
     PreTrade:::riskStyle
     MonteCarlo:::riskStyle
     RealTime:::riskStyle
     Investor:::brainStyle
     Trader:::brainStyle
     Sync:::brainStyle
     OrderGen:::execStyle
     Algo:::execStyle
     Route:::execStyle
     Monitor:::execStyle
     PostTrade:::execStyle
     Collect_L:::learningStyle
     Pattern:::learningStyle
     Retrain:::learningStyle
     Adapt:::learningStyle
     Deploy:::learningStyle
     FeatureStore:::storageStyle
     Analytics:::storageStyle
     Archive:::storageStyle
    classDef externalStyle fill:#eceff1,stroke:#455a64,stroke-width:2px,color:#000
    classDef ingestionStyle fill:#e8f5e9,stroke:#388e3c,stroke-width:2px,color:#000
    classDef aiCoreStyle fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#000
    classDef aiNewStyle fill:#ffebee,stroke:#d32f2f,stroke-width:3px,color:#000
    classDef fusionStyle fill:#fce4ec,stroke:#c2185b,stroke-width:2px,color:#000
    classDef riskStyle fill:#ffebee,stroke:#d32f2f,stroke-width:3px,color:#000
    classDef brainStyle fill:#e0f2f1,stroke:#00796b,stroke-width:2px,color:#000
    classDef execStyle fill:#f1f8e9,stroke:#689f38,stroke-width:2px,color:#000
    classDef learningStyle fill:#ede7f6,stroke:#512da8,stroke-width:2px,color:#000
    classDef storageStyle fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000`;

export const MODULES = [
  {
    id: 1,
    name: "Fundamental AI",
    category: "CORE",
    description: "Şirkət sağlamlığı və iqtisadiyyatın fundamental təhlili.",
    detailedDescription: "Maliyyə hesabatlarını, makroiqtisadi göstəriciləri və sektor trendlərini dərindən analiz edən əsas modul. Şirkətlərin daxili dəyərini (intrinsic value) hesablayır və uzunmüddətli investisiya qərarları üçün təməl formalaşdırır.",
    dataSources: ["Earnings Reports", "GDP Growth", "Inflation (CPI)", "Cash Flow", "Balance Sheets"],
    models: ["LSTM", "Prophet", "Random Forest", "ARIMA"],
    output: "Economic Health Score (0-100)",
    example: "AAPL fundamental score: 85/100 (Güclü cash flow, Yüksək ROE)",
    roiPotential: "Uzunmüddətli portfel sabitliyi və illik 8-12% stabil gəlir təminatı.",
    riskMitigation: "Aşağı keyfiyyətli, borc yükü yüksək olan şirkətləri portfeldən uzaq tutur."
  },
  {
    id: 2,
    name: "Geopolitical AI",
    category: "STRATEGIC",
    description: "Geosiyasi risklərin və qlobal münaqişələrin təhlili.",
    detailedDescription: "Qlobal münaqişələri, sanksiyaları, ticarət müharibələrini və siyasi qərarları real vaxtda izləyir. Təchizat zəncirinə və qlobal bazarlara təsir edə biləcək makro-siyasi hadisələri proqnozlaşdırır.",
    dataSources: ["Reuters", "GDELT Project", "World Bank", "UN", "Defense Think Tanks"],
    models: ["BERT NLP", "Graph Neural Networks", "Event Detection"],
    output: "Geopolitical Risk Index (0-100)",
    example: "Rusiya-Ukrayna müharibəsi: Energy sector risk 85/100 → Energy long",
    roiPotential: "Böhran anlarında kapitalın qorunması və safe-haven aktivlərə vaxtında keçid.",
    riskMitigation: "Qara qu quşu (Black Swan) hadisələrinin təsirini minimuma endirir."
  },
  {
    id: 3,
    name: "Technical AI",
    category: "CORE",
    description: "Qrafiklərin, indikatorların və bazar strukturunun texniki təhlili.",
    detailedDescription: "Qiymət hərəkətlərini, həcm profillərini və order book dinamikasını analiz edərək qısamüddətli və ortamüddətli giriş/çıxış nöqtələrini müəyyən edir. Mikro-struktur səviyyəsində likvidlik boşluqlarını tapır.",
    dataSources: ["Candlestick Patterns", "Order Book", "Volume Profile", "Dark Pool Data"],
    models: ["CNN", "LSTM", "Hidden Markov Models"],
    output: "Technical Score (-100 to +100) & Signals",
    example: "TSLA: RSI 72 (overbought), MACD Bullish → +25 (Moderate Bullish)",
    roiPotential: "Ticarət xərclərinin azaldılması və optimal giriş/çıxışla əlavə 2-3% illik alpha.",
    riskMitigation: "Səhv zamanda (məsələn, overbought zonada) alışların qarşısını alır."
  },
  {
    id: 4,
    name: "Quantitative AI",
    category: "CORE",
    description: "Kəmiyyət modelləri və portfel optimizasiyası.",
    detailedDescription: "Riyazi və statistik modellər vasitəsilə arbitraj imkanlarını, mean-reversion və momentum strategiyalarını icra edir. Portfelin risk-gəlir nisbətini (Sharpe ratio) maksimuma çatdırmaq üçün çəkiləri dinamik tənzimləyir.",
    dataSources: ["Historical Prices", "Volatility", "Correlations", "Factor Data"],
    models: ["GARCH", "XGBoost", "Reinforcement Learning"],
    output: "Quantitative Signals & Optimal Portfolio Weights",
    example: "AAPL 15%, GOOGL 12%, Cash 10%, Hedges 5%",
    roiPotential: "Sistemli və emosiyasız ticarət sayəsində stabil, riskə uyğunlaşdırılmış gəlir.",
    riskMitigation: "Korrelyasiya risklərini idarə edir və portfelin ümumi VaR (Value at Risk) göstəricisini limitdə saxlayır."
  },
  {
    id: 5,
    name: "Sentiment AI",
    category: "CORE",
    description: "Xəbərlərin, sosial medianın və analitik rəylərinin təhlili.",
    detailedDescription: "Milyonlarla mətn datasını (xəbərlər, tweetlər, forumlar) saniyələr içində oxuyaraq bazarın emosional vəziyyətini ölçür. Retail və institusional investorların psixologiyasını rəqəmsallaşdırır.",
    dataSources: ["Twitter/X", "Reddit", "Earnings Calls", "Press Releases"],
    models: ["FinBERT", "GPT-4", "Aspect-Based Sentiment"],
    output: "Market Sentiment Score (-100 to +100)",
    example: "NVDA: News +85, Social +78 → FINAL: +72 (Strong Bullish)",
    roiPotential: "Bazarın trend dəyişikliklərini kütlədən əvvəl tutaraq yüksək momentum gəlirləri.",
    riskMitigation: "Panika satışları və ya irrasional coşqu (FOMO) zamanı xəbərdarlıq edir."
  },
  {
    id: 6,
    name: "Persona Analysis AI",
    category: "STRATEGIC",
    description: "CEO və rəhbərliyin keyfiyyətinin, vizyonunun təhlili.",
    detailedDescription: "Rəhbər şəxslərin keçmiş uğurlarını, danışıq tərzini, risk iştahını və strateji vizyonunu analiz edir. Liderlik keyfiyyətinin şirkətin gələcək performansına təsirini proqnozlaşdırır.",
    dataSources: ["SEC filings", "LinkedIn", "Earnings call transcripts", "Media Interviews"],
    models: ["NLP", "Network Analysis", "Regression Analysis"],
    output: "Executive Quality Score (0-100)",
    example: "Satya Nadella: 91/100 (Exceptional Leader) → MSFT +8% weight",
    roiPotential: "Uzaqgörən və innovativ liderlərin idarə etdiyi şirkətlərə erkən investisiya.",
    riskMitigation: "Zəif və ya riskli rəhbərliyi olan şirkətlərdən uzaq durmaqla potensial iflaslardan qorunma."
  },
  {
    id: 7,
    name: "Government Policy AI",
    category: "STRATEGIC",
    description: "Mərkəzi bankların və hökumət siyasətinin təhlili.",
    detailedDescription: "Faiz dərəcəsi qərarlarını, qanunvericilik dəyişikliklərini və tənzimləyici siyasətləri izləyir. Mərkəzi bankların (Fed, ECB) ritorikasını analiz edərək makro-iqtisadi trendləri müəyyən edir.",
    dataSources: ["FRED", "BLS", "Congress.gov", "IMF", "Central Bank Minutes"],
    models: ["NLP", "Time Series", "Event Study"],
    output: "Policy Direction Score & Market Impact Forecast",
    example: "Fed 0.75% artırımı: Tech -10%, Banks +4% → Reduce tech",
    roiPotential: "Makro tsikllərə uyğun sektor rotasiyaları ilə əlavə gəlir.",
    riskMitigation: "Sərt pul siyasəti dövrlərində riskli aktivlərdən qorunma."
  },
  {
    id: 8,
    name: "Institutional Holdings AI",
    category: "STRATEGIC",
    description: "Smart Money (Böyük fondların) hərəkətlərinin təhlili.",
    detailedDescription: "Dünyanın ən böyük hedc fondlarının və institusional investorların portfel dəyişikliklərini izləyir. 'Smart Money'nin hara axdığını və hansı sektorlarda cəmləşdiyini analiz edir.",
    dataSources: ["SEC 13F", "Form 13D/G", "EPFR", "Prime Broker Data"],
    models: ["Network Analysis", "Flow Prediction", "Peer Comparison"],
    output: "Smart Money Sentiment & Flow Forecast",
    example: "Warren Buffett AAPL satır → AAPL exposure 8% → 4% azalt",
    roiPotential: "Uğurlu investorların strategiyalarını təkrarlayaraq (copy-trading) yüksək gəlir ehtimalı.",
    riskMitigation: "Həddindən artıq yüklənmiş (crowded) ticarətlərdən qaçaraq likvidlik risklərini azaldır."
  },
  {
    id: 9,
    name: "Corporate Leadership AI",
    category: "STRATEGIC",
    description: "Korporativ idarəetmə və səhmdar hüquqlarının təhlili.",
    detailedDescription: "İdarə heyətinin müstəqilliyini, kompensasiya strukturlarını və səhmdar hüquqlarını qiymətləndirir. Güclü korporativ idarəetmənin uzunmüddətli dəyər yaradılmasına təsirini ölçür.",
    dataSources: ["Proxy statements", "ISS", "Legal databases", "Glass Lewis"],
    models: ["Regression Analysis", "NLP", "Network Analysis"],
    output: "Leadership Quality Score (0-100)",
    example: "Boeing 737 MAX böhranı: 42/100 → Avoid BA",
    roiPotential: "Şəffaf və effektiv idarə olunan şirkətlərə investisiya ilə stabil böyümə.",
    riskMitigation: "Korporativ skandallar və idarəetmə böhranları riskini əvvəlcədən müəyyən edir."
  },
  {
    id: 10,
    name: "Insider Trading AI",
    category: "ALPHA HUNTER",
    description: "Daxili ticarət, CEO/CFO alış-satışlarının təhlili (VETO gücü).",
    detailedDescription: "Şirkət rəhbərlərinin öz səhmləri ilə etdikləri əməliyyatları real vaxtda izləyir. 'Cluster buying' (qrup halında alış) kimi güclü siqnalları tutur və şübhəli satışlarda VETO hüququndan istifadə edir.",
    dataSources: ["SEC EDGAR (Form 4)", "InsiderScreener API", "Corporate Filings"],
    models: ["Anomaly Detection", "Clustering", "Time-Series Correlation"],
    output: "Insider Confidence Score (-100 to +100) & VETO SIGNAL",
    example: "Elon Musk sold $3.5B → VETO (Block Longs) + INITIATE SHORT",
    roiPotential: "Şirkətin daxili vəziyyətini ən yaxşı bilən şəxslərin hərəkətlərini izləyərək yüksək Alpha.",
    riskMitigation: "Rəhbərliyin kütləvi satış etdiyi şirkətlərə investisiyanı bloklayır."
  },
  {
    id: 11,
    name: "Supply Chain AI",
    category: "ALPHA HUNTER",
    description: "Qlobal təchizat zənciri və logistika risklərinin təhlili.",
    detailedDescription: "Gəmi hərəkətlərini, liman tıxaclarını və xammal təchizatçılarını izləyərək istehsal ləngimələrini rəsmi hesabatlardan aylar əvvəl proqnozlaşdırır.",
    dataSources: ["ImportGenius", "MarineTraffic", "Local media", "Customs Data"],
    models: ["Graph Neural Networks", "Predictive Logistics"],
    output: "Supply Chain Health Score (0-100) & Risk Alerts",
    example: "Foxconn gəmiləri gecikir → SHORT AAPL (Hesabatdan 1 ay əvvəl)",
    roiPotential: "Təchizat problemlərini əvvəlcədən bilərək short pozisiyalarından və ya rəqib şirkətlərdən gəlir.",
    riskMitigation: "İstehsalı dayana biləcək şirkətlərdəki riskləri sıfıra endirir."
  },
  {
    id: 12,
    name: "Satellite/Physical AI",
    category: "ALPHA HUNTER",
    description: "Peyk görüntüləri və fiziki fəaliyyətin təhlili (Reality Check).",
    detailedDescription: "Zavodların parkinq yerlərini, limanlardakı konteynerləri və mağazalardakı müştəri axınını peyk və GPS datası ilə analiz edərək rəsmi rəqəmlərin doğruluğunu yoxlayır.",
    dataSources: ["Planet Labs", "Orbital Insight", "GPS Data", "Infrared Imagery"],
    models: ["Computer Vision (YOLOv8)", "Change Detection", "Infrared Analysis"],
    output: "Physical Activity Index (0-100) & Revenue Forecast",
    example: "Fremont zavodu parkinqi boşalır → BUY TSLA (Delivery BEAT)",
    roiPotential: "Rəsmi hesabatlardan əvvəl real satış/istehsal həcmini bilərək bazarı qabaqlamaq.",
    riskMitigation: "Maliyyə hesabatlarını şişirdən (fraud) şirkətləri fiziki sübutlarla ifşa edir."
  },
  {
    id: 13,
    name: "Competitor Intel AI",
    category: "ALPHA HUNTER",
    description: "Rəqiblərin işə qəbul, patent və rəqəmsal fəaliyyətlərinin təhlili.",
    detailedDescription: "Rəqib şirkətlərin vakansiyalarını, yeni patentlərini və rəqəmsal izlərini analiz edərək onların gələcək strategiyalarını və məhsul planlarını deşifrə edir.",
    dataSources: ["LinkedIn", "USPTO", "SEMrush", "Job Boards"],
    models: ["NLP Keyword Extraction", "Trend Forecasting"],
    output: "Competitive Advantage Score (0-100)",
    example: "Rəqib Quantum mühəndisləri yığır → LONG COMPETITOR",
    roiPotential: "Texnoloji sıçrayış edəcək şirkətləri məhsul çıxmadan aylar əvvəl tapmaq.",
    riskMitigation: "Bazar payını itirməkdə olan köhnəlmiş şirkətlərdən uzaq durmaq."
  },
  {
    id: 14,
    name: "Activist Investor AI",
    category: "ALPHA HUNTER",
    description: "Aqressiv investorların (Carl Icahn, Elliott) kampaniyalarının təhlili.",
    detailedDescription: "Aktivist investorların şirkətlərə müdaxiləsini, idarə heyəti dəyişikliyi tələblərini və yenidənqurma planlarını izləyir. Bu hadisələrin səhm qiymətinə təsirini proqnozlaşdırır.",
    dataSources: ["SEC EDGAR (13D)", "Hedge Fund Letters", "News Wires"],
    models: ["Event Classification NLP", "Impact Prediction"],
    output: "Activist Event Probability & Target Price Bump",
    example: "Elliott Mgmt PINS-ə girir (9%) → IMMEDIATE BUY (Copy Trade)",
    roiPotential: "Aktivist kampaniyalarının yaratdığı qısamüddətli qiymət sıçrayışlarından (pop) gəlir.",
    riskMitigation: "Uğursuz ola biləcək idarəetmə mübarizələrində (proxy fights) iştirakdan qaçınmaq."
  },
  {
    id: 15,
    name: "Customer Sentiment AI",
    category: "ALPHA HUNTER",
    description: "Müştəri məmnuniyyəti, churn və məhsul rəylərinin təhlili.",
    detailedDescription: "Tətbiq mağazalarındakı rəyləri, müştəri şikayətlərini və axtarış trendlərini analiz edərək məhsulun real populyarlığını və müştəri itkisi (churn) riskini hesablayır.",
    dataSources: ["Data.ai", "App Store Reviews", "Google Trends", "Reddit"],
    models: ["Aspect-Based Sentiment Analysis", "Regression Model"],
    output: "Brand Health Score (0-100)",
    example: "Netflix 'Cancel' axtarışları +200% → SHORT / PUT OPTIONS",
    roiPotential: "İstehlakçı trendlərini erkən tutaraq pərakəndə və texnologiya sektorlarında alpha yaratmaq.",
    riskMitigation: "Müştəri bazasını itirən şirkətlərin gəlir düşüşündən əvvəl mövqeni bağlamaq."
  },
  {
    id: 16,
    name: "Regulatory & Litigation AI",
    category: "DEFENSIVE",
    description: "Məhkəmə iddiaları, patent mübahisələri və cərimə risklərinin təhlili.",
    detailedDescription: "Məhkəmə sənədlərini, anti-inhisar araşdırmalarını və tənzimləyici qurumların qərarlarını oxuyaraq şirkətlərin hüquqi və maliyyə risklərini qiymətləndirir.",
    dataSources: ["PACER", "DOJ Press Releases", "Patent Offices", "SEC Filings"],
    models: ["Legal NLP", "Precedent Matching"],
    output: "Litigation Risk Score (0-100)",
    example: "Class Action Lawsuit böyüyür → Cərimə riski → Səhm Düşər",
    roiPotential: "Rəqiblərin hüquqi problemlərindən faydalanaraq bazar payı qazanan şirkətləri tapmaq.",
    riskMitigation: "Milyardlarla dollar cərimə və ya məhsul qadağası riski olan şirkətləri bloklamaq."
  },
  {
    id: 17,
    name: "ESG & Carbon AI",
    category: "DEFENSIVE",
    description: "Ekoloji və sosial risklərin, karbon izinin təhlili.",
    detailedDescription: "Şirkətlərin karbon emissiyalarını, ekoloji siyasətlərini və sosial məsuliyyətini analiz edir. ESG fondlarının kapital axınlarını proqnozlaşdırır.",
    dataSources: ["Sustainability Reports", "NGO Watchdogs", "MSCI ESG Ratings"],
    models: ["ESG Predict", "Climate Scenario Modeling"],
    output: "ESG Fund Flow Prediction (Inflow vs Outflow)",
    example: "ESG reytinqi düşür → BlackRock pul çəkir → Outflow",
    roiPotential: "Yaşıl enerjiyə keçid və ESG trendlərindən faydalanan şirkətlərə uzunmüddətli investisiya.",
    riskMitigation: "Ekoloji fəlakətlər və ya 'Greenwashing' skandalları riskindən qorunma."
  },
  {
    id: 18,
    name: "Earnings Quality AI",
    category: "DEFENSIVE",
    description: "Mühasibat saxtakarlığının aşkarlanması (Benford's Law).",
    detailedDescription: "Maliyyə hesabatlarındakı rəqəmlərin təbii paylanmasını (Benford qanunu) və anomaliyaları analiz edərək mühasibat manipulyasiyalarını və potensial saxtakarlıqları ifşa edir.",
    dataSources: ["Financial Statements", "Audit Reports", "SEC 10-K/10-Q"],
    models: ["Benford's Law", "Anomaly Detection", "Forensic Accounting ML"],
    output: "Accounting Risk Score (0-100)",
    example: "Rəqəmlər təbii qanuna uymur → VETO (Blacklist Stock)",
    roiPotential: "Şəffaf və təmiz maliyyəyə malik şirkətlərə güvənli investisiya.",
    riskMitigation: "Enron və ya Wirecard tipli mühasibat skandallarından 100% qorunma (VETO gücü)."
  }
];

export const TECH_STACK = [
  {
    category: "Proqramlaşdırma Dilləri",
    items: [
      { name: "Python", desc: "AI/ML (TensorFlow, PyTorch), Data Science, Backend Services" },
      { name: "Java", desc: "High-performance services, Spring Boot, Apache Spark, Kafka" },
      { name: "Go (Golang)", desc: "Real-time services, High concurrency, Ultra-fast APIs" },
      { name: "C++", desc: "Ultra-low latency trading, FIX Protocol, GPU computing (CUDA)" },
      { name: "TypeScript", desc: "Frontend development (React), Type safety" }
    ]
  },
  {
    category: "AI/ML Frameworks",
    items: [
      { name: "Deep Learning", desc: "TensorFlow 2.x, PyTorch, Keras" },
      { name: "Traditional ML", desc: "XGBoost, LightGBM, Scikit-learn, CatBoost" },
      { name: "NLP", desc: "Transformers (HuggingFace), spaCy, NLTK" },
      { name: "Time Series", desc: "Prophet, statsmodels, arch, pmdarima" }
    ]
  },
  {
    category: "Data & İnfrastruktur",
    items: [
      { name: "Streaming", desc: "Apache Kafka (1M+ msg/s)" },
      { name: "Caching", desc: "Redis Cluster (Sub-ms latency)" },
      { name: "Vector DB", desc: "Pinecone (Embeddings & Semantic Search)" },
      { name: "Data Lake", desc: "AWS S3 (Parquet, Cold Store)" }
    ]
  }
];

export const INVESTMENT_THESIS = {
  title: "İnstitusional İnvestisiya Tezisi (VC & PE üçün)",
  summary: "Meridian v4.0 ənənəvi kəmiyyət (quant) və fundamental analiz metodlarını qabaqcıl süni intellekt və alternativ data mənbələri ilə birləşdirən, institusional səviyyəli ticarət infrastrukturudur. Sistem insan emosiyalarını və qərəzlərini aradan qaldıraraq, riskə uyğunlaşdırılmış yüksək gəlir (Alpha) yaratmaq üçün dizayn edilib.",
  keyPoints: [
    {
      title: "Unikal Rəqabət Üstünlüyü (Moat)",
      content: "Ənənəvi fondlar yalnız maliyyə hesabatlarına və qiymət qrafiklərinə baxarkən, Meridian v4.0 peyk görüntülərindən, təchizat zənciri logistikasından və CEO psixologiyasından real vaxt rejimində məlumat çəkir. Bu 'Alternative Data' inteqrasiyası bazarda məlumat asimmetriyası yaradır."
    },
    {
      title: "Riskin İdarə Edilməsi (Downside Protection)",
      content: "Sistemin 'Hard Evidence' və 'VETO' mexanizmləri kapitalın qorunmasını prioritetləşdirir. İnsayder satışları və ya mühasibat anomaliyaları aşkar edildikdə, sistem avtomatik olaraq ticarəti bloklayır, bu da böyük iflaslardan (drawdowns) qoruyur."
    },
    {
      title: "Ölçeklenebilirlik (Scalability)",
      content: "Bulud əsaslı mikroservis arxitekturası və Kafka/Redis infrastrukturu sayəsində sistem saniyədə milyonlarla məlumatı emal edə bilir. AUM (Assets Under Management) artdıqca performans düşmür, əksinə, daha çox data ilə ML modelləri daha da dəqiqləşir."
    },
    {
      title: "Hədəf Bazar və Monetizasiya",
      content: "B2B modelində Hedge Fondlar, Ailə Ofisləri (Family Offices) və İnstitusional İnvestorlar üçün SaaS və ya AUM üzərindən faiz (Performance Fee) modeli ilə təklif edilə bilər. Qlobal alqoritmik ticarət bazarı 2030-cu ilə qədər 40 milyard dolları keçəcək."
    }
  ],
  metrics: [
    { label: "Target Annual Alpha", value: "+8-12%" },
    { label: "Max Drawdown Limit", value: "< 10%" },
    { label: "Sharpe Ratio Target", value: "> 2.0" },
    { label: "Latency", value: "< 1ms" }
  ]
};
