import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BorderX from "../assets/borders.png";
import BorderY from "../assets/borders-y.png";
import TeamInbox from "../assets/icons/team-inbox.png"
import AutomationFlows from "../assets/icons/automation-flows.png"
import Instagram from "../assets/icons/instagram.png"
import Campaigns from "../assets/icons/campaigns.png"
import CRM from "../assets/icons/crm.png"
import Support from "../assets/icons/support.png"

// Clean SVG Green Checkmark Icon matching the brand
const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#06b349"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Standard Dash Icon for unavailable features
const DashIcon = () => (
  <span className="text-[#c0b9a6] font-medium">—</span>
);

export default function Pricing() {
  const [billingTab, setBillingTab] = useState<'quarterly' | 'halfYearly' | 'yearly'>('quarterly');

  const plans = [
    {
      name: 'Launch',
      desc: 'For solo sellers and small teams who need quick WhatsApp automation and faster customer responses.',
      cta: 'Start Launch',
      popular: false,
      pricing: {
        quarterly: { price: '₹4,999', period: '/quarter', equivalent: '' },
        halfYearly: { price: '₹7,499', period: '/6 months', equivalent: '(5+1) - Subscribe for 5 Months and Get 1 Month Free' },
        yearly: { price: '₹14,999', period: '/year', equivalent: '(10+2) - Subscribe for 10 Months and Get 2 Month Free' },
      },
      features: [
        'WhatsApp - 1 number',
        'Owner + 2 agents included',
        '100 AI generated messages',
        'Unified WhatsApp inbox',
        'Broadcast & Retargeting campaigns',
        'Contact list with up to 50 tags, basic filters',
        'WhatsApp Cloud API integration',
        'Basic analytics and reporting',
        'Email support',
      ],
    },
    {
      name: 'Sprint',
      desc: 'For growing teams who want advanced automation, multi-agent workflows, and powerful WhatsApp campaign tools.',
      cta: 'Get Sprint',
      popular: true,
      pricing: {
        quarterly: { price: '₹7,499', period: '/quarter', equivalent: '' },
        halfYearly: { price: '₹12,499', period: '/6 months', equivalent: '(5+1) - Subscribe for 5 Months and Get 1 Month Free' },
        yearly: { price: '₹24,999', period: '/year', equivalent: '(10+2) - Subscribe for 10 Months and Get 2 Month Free' },
      },
      features: [
        'Everything in Launch, plus:',
        'WhatsApp + Instagram',
        'Owner + 5 agents included',
        '500 AI generated messages',
        'Visual flow builder for WhatsApp journeys',
        'Multi-pipeline CRM',
        'Instagram DMs & comments auto-replies',
        'Instagram for 2 accounts',
        '1 appointment calendar (up to 50 bookings/month)',
        'Shopify, WooCommerce, payment links & webhooks',
        'Social media scheduling (FB & IG)',
        'Funnel, campaign & agent analytics',
        'Priority email & phone support',
      ],
    },
    {
      name: 'Turbo',
      desc: 'For teams that require custom integrations, enterprise-level security, and dedicated support.',
      cta: 'Get Turbo',
      popular: false,
      pricing: {
        quarterly: { price: '₹24,999', period: '/quarter', equivalent: '' },
        halfYearly: { price: '₹41,999', period: '/6 months', equivalent: '(5+1) - Subscribe for 5 Months and Get 1 Month Free' },
        yearly: { price: '₹83,999', period: '/year', equivalent: '(10+2) - Subscribe for 10 Months and Get 2 Month Free' },
      },
      features: [
        'Everything in Sprint, plus:',
        'Owner + 15 agents included',
        '5,000 AI generated messages',
        'AI-assisted flow builder with intent-based routing',
        'AI content writer & flow blueprints',
        'Advanced CRM workflows + AI lead scoring',
        'Instagram automation for 5 accounts',
        'A/B testing & high-volume campaign sending',
        '3 appointment calendars with team scheduling',
        'Custom webhooks, API access & CRM integrations',
        'ROI tracking & custom reports',
        'Dedicated support agent',
      ],
    },
  ];

  const compareCategories = [
    {
      name: 'Team Inbox',
      icon: TeamInbox,
      features: [
        { name: 'Channels', startup: 'WhatsApp only', scale: 'WA + Instagram', enterprise: 'WA + Instagram' },
        { name: 'Agents included', startup: 'Owner + 2', scale: 'Owner + 5', enterprise: 'Owner + 15' },
        { name: 'Unlimited conversations', startup: true, scale: true, enterprise: true },
        { name: 'Chat assignment', startup: 'Basic', scale: 'Unlimited', enterprise: 'Unlimited' },
        { name: 'Saved replies', startup: true, scale: true, enterprise: true },
        { name: 'Workload distribution', startup: false, scale: false, enterprise: true },
      ],
    },
    {
      name: 'Broadcasting & Campaigns',
      icon: Campaigns,
      features: [
        { name: 'Broadcast & retargeting', startup: true, scale: true, enterprise: true },
        { name: 'Contact tags', startup: 'Up to 50', scale: 'Up to 100', enterprise: 'Unlimited' },
        { name: 'Dynamic segments', startup: false, scale: true, enterprise: true },
        { name: 'A/B testing', startup: false, scale: false, enterprise: true },
        { name: 'AI lead scoring', startup: false, scale: false, enterprise: true },
      ],
    },
    {
      name: 'Automation & Flows',
      icon: AutomationFlows,
      features: [
        { name: 'Visual flow builder', startup: false, scale: 'Basic journeys', enterprise: 'AI-assisted, advanced' },
        { name: 'AI messages / month', startup: '100', scale: '500', enterprise: '5,000' },
        { name: 'Intent-based routing', startup: false, scale: false, enterprise: true },
        { name: 'AI reply suggestions', startup: false, scale: false, enterprise: true },
      ],
    },
    {
      name: 'Instagram',
      icon: Instagram,
      features: [
        { name: 'Accounts connected', startup: false, scale: '2', enterprise: '5' },
        { name: 'DM & comment automation', startup: false, scale: true, enterprise: true },
        { name: '"Price please" auto-replies', startup: false, scale: true, enterprise: true },
        { name: 'Giveaway engine', startup: false, scale: false, enterprise: true },
      ],
    },
    {
      name: 'CRM & Integrations',
      icon: CRM,
      features: [
        { name: 'CRM', startup: 'Basic', scale: 'Multi-pipeline + scoring', enterprise: 'Advanced workflows' },
        { name: 'Shopify / WooCommerce', startup: false, scale: true, enterprise: true },
        { name: 'Custom webhooks & API', startup: false, scale: false, enterprise: true },
        { name: 'Appointment calendar', startup: false, scale: '1 (50 bookings/mo)', enterprise: '3 + team scheduling' },
      ],
    },
    {
      name: 'Analytics & Support',
      icon: Support,
      features: [
        { name: 'Analytics', startup: 'Basic', scale: 'Funnel, campaign, agent', enterprise: 'ROI + custom reports' },
        { name: 'Social media scheduling', startup: false, scale: 'Facebook & Instagram', enterprise: 'Advanced + analytics' },
        { name: 'Support', startup: 'Email', scale: 'Priority email & phone', enterprise: 'Dedicated agent' },
      ],
    },
  ];
  const imgIcon1 = "/figma/imgIcon1.svg";
  const imgImage27 = "/figma/imgImage27.png";


  return (
    <div className="bg-[#f8f5ec] relative size-full min-h-screen flex flex-col justify-between overflow-x-clip">
      <Header />

      {/* Main Pricing Hero Container */}
      <div className="border-[#e0dac6] border-l border-r border-solid content-stretch flex flex-col items-center container mx-auto bg-[#f8f5ec]">

        {/* Hero Headline Section */}
        <div className="w-full py-[80px] px-[40px] border-b border-[#e0dac6] flex flex-col items-center text-center">
          <div className="flex gap-[10px] items-center justify-center mb-[16px]">
            <div className="bg-[#06b349] size-[10px]" />
            <Typography className="font-['Courier_Prime'] leading-[1.4] text-[#0c221f] text-[18px] uppercase tracking-wider">
              Pricing Plans
            </Typography>
          </div>
          <Typography component="h1" className="font-['Geist:SemiBold'] font-semibold leading-[1.2] text-[#0c221f] text-[54px] tracking-[-1.5px] max-w-[900px] mb-[20px]">
            Choose the plan that grows with your business
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#60584c] text-[20px] max-w-[800px] leading-[1.5] mb-[36px]">
            Secure, scalable WhatsApp automation — Engage customers, support instantly, boost sales. 14-day free trial on all plans.
          </Typography>

          <div className="relative shrink-0" data-node-id="467:988" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
              <div className="bg-[#06b349] hover:bg-[#05a043] active:scale-[0.98] transition-all duration-150 relative rounded-[8px] shrink-0 cursor-pointer" data-node-id="467:989" data-name="Link">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.992px] items-center overflow-clip pl-[20px] pr-[15px] py-[15px] relative rounded-[inherit] size-full">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1410px] left-[calc(50%+0.5px)] mix-blend-color-burn top-1/2 w-[2115px]" data-node-id="467:990" data-name="image 27">
                    <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover opacity-25 pointer-events-none size-full" src={imgImage27} />
                  </div>
                  <Typography className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-none relative shrink-0 text-[18px] text-white whitespace-nowrap" data-node-id="467:991">
                    Book a demo
                  </Typography>
                  <div className="relative shrink-0 size-[20px]" data-node-id="467:992" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                  </div>
                </div>
              </div>
              <div className="bg-white hover:bg-[#f8f5ec] active:scale-[0.98] transition-all duration-150 border border-[#dedace] border-solid relative rounded-[8px] shrink-0 cursor-pointer" data-node-id="467:994" data-name="Link">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[21px] pr-[16px] py-[16px] relative rounded-[inherit] size-full">
                  <Typography className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-none relative shrink-0 text-[#092511] text-[18px] whitespace-nowrap" data-node-id="467:995">
                    Get Started
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards Section */}
        <div className="w-full pb-[60px] pt-[40px] border-b border-[#e0dac6] relative overflow-hidden">
          {/* Billing Toggle Tab Selector */}
          <div className="flex items-center justify-center px-[20px]">
            <div className="border border-[#e0dac6] border-solid p-[4px] rounded-[0px] flex items-center justify-between mb-[0px] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <button
                onClick={() => setBillingTab('quarterly')}
                className={`py-[8px] px-[18px] rounded-[0px] font-['Geist:Medium'] font-medium text-[15px] transition-all duration-200 cursor-pointer ${billingTab === 'quarterly'
                  ? 'bg-[#092511] text-white shadow-sm'
                  : 'text-[#60584c] hover:bg-[#f8f5ec]'
                  }`}
              >
                Quarterly
              </button>
              <button
                onClick={() => setBillingTab('halfYearly')}
                className={`py-[8px] px-[18px] rounded-[0px] font-['Geist:Medium'] font-medium text-[15px] transition-all duration-200 cursor-pointer ${billingTab === 'halfYearly'
                  ? 'bg-[#092511] text-white shadow-sm'
                  : 'text-[#60584c] hover:bg-[#f8f5ec]'
                  }`}
              >
                Half-Yearly
              </button>
              <button
                onClick={() => setBillingTab('yearly')}
                className={`py-[8px] px-[18px] rounded-[0px] font-['Geist:Medium'] font-medium text-[15px] transition-all duration-200 cursor-pointer ${billingTab === 'yearly'
                  ? 'bg-[#092511] text-white shadow-sm'
                  : 'text-[#60584c] hover:bg-[#f8f5ec]'
                  }`}
              >
                Yearly
              </button>
            </div>
          </div>
          <div className='border-y border-[#e0dac6] border-solid px-[60px] mt-[40px] relative overflow-hidden'>
            <div className="border-x border-[#e0dac6] border-solid overflow-hidden shadow-[0_8px_40px_rgba(12,34,31,0.02)] grid grid-cols-1 md:grid-cols-3 items-stretch  w-full">
              {plans.map((plan, idx) => {
                const currentPrice = plan.pricing[billingTab];
                const borderClasses = idx > 0 ? 'border-t md:border-t-0 md:border-l border-[#e0dac6] border-solid' : '';
                return (
                  <div
                    key={idx}
                    className={`flex flex-col justify-between relative transition-all duration-300 p-[40px] ${borderClasses} ${plan.popular
                      ? 'bg-[#39e47b29]/[0.1] hover:bg-[#06b349]/[0.02]'
                      : 'hover:bg-[#fbfaf2]/50'
                      }`}
                  >
                    {plan.popular && (
                      <>
                        {/* <div className="absolute top-0 inset-x-0 h-[4px] bg-[#06b349]" /> */}
                        <div className="absolute top-[24px] right-[24px] bg-[#06b349] text-[#FFF] px-[14px] py-[6px] font-['Courier_Prime'] text-[11px] font-bold uppercase tracking-wider">
                          Recommended
                        </div>
                      </>
                    )}

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        {/* Header */}
                        <div className="mb-[28px]">
                          <Typography component="h3" className="font-['Courier_Prime'] text-[16px] text-[#0c221f] uppercase tracking-widest mb-[12px]">
                            {plan.name}
                          </Typography>
                          <div className="flex items-baseline gap-[2px] mb-[8px]">
                            <span className="font-['Geist:Medium'] font-medium text-[26px] text-[#0c221f] align-top mr-[2px]">₹</span>
                            <Typography className="font-['Geist:Bold'] font-bold text-[38px] text-[#0c221f] leading-none tracking-tight">
                              {currentPrice.price.replace('₹', '')}
                            </Typography>
                            <Typography className="font-['Geist:Regular'] text-[#8a8475] text-[14px] ml-[4px]">
                              {currentPrice.period}
                            </Typography>
                          </div>

                          {currentPrice.equivalent && (
                            <div className="flex items-center gap-[6px] bg-[#06b349]/[0.06] text-[#06b349] border border-[#06b349]/20 px-[12px] py-[6px] rounded-[6px] my-[14px] w-fit">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0">
                                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <Typography className="font-['Geist'] font-semibold text-[11px] tracking-wide uppercase">
                                {currentPrice.equivalent}
                              </Typography>
                            </div>
                          )}

                          <Typography className="font-['Geist:Regular'] text-[#60584c] text-[15px] leading-relaxed mt-[12px]">
                            {plan.desc}
                          </Typography>
                        </div>

                        {/* CTA Button */}
                        <div className="mb-[32px]">
                          <button
                            onClick={() => window.open('https://app.wenext.ai/auth', '_blank')}
                            className={`w-full py-[14px] px-[24px] transition-all active:scale-[0.98] duration-200 cursor-pointer text-[13px] uppercase tracking-wider font-['Geist:Bold'] font-bold ${plan.popular
                              ? 'bg-[#06b349] hover:bg-[#05a043] text-white shadow-[0_8px_20px_rgba(6,179,73,0.25)]'
                              : 'bg-[#f8f5ec] text-[#0c221f] hover:bg-[#0c221f] hover:text-white border border-[#e0dac6] border-solid'
                              }`}
                          >
                            {plan.cta}
                          </button>
                        </div>

                        {/* Features list */}
                        <div className="border-t border-[#e0dac6]/60 pt-[28px]">
                          <ul className="flex flex-col gap-[12px]">
                            {plan.features.map((feature, fidx) => {
                              const isHeader = feature.endsWith('plus:') || feature.startsWith('Everything');
                              return (
                                <li key={fidx} className="flex items-start gap-[12px] group py-[2px]">
                                  {!isHeader ? (
                                    <div className="size-[6px] rounded-full bg-[#06b349] text-[#06b349] flex items-center justify-center shrink-0 mt-[10px] transition-transform duration-200 group-hover:scale-110">
                                      {/* <CheckIcon /> */}
                                    </div>
                                  ) : null}
                                  <Typography
                                    className={`font-['Geist:Regular'] text-[14px] leading-relaxed ${isHeader
                                      ? "text-[#0c221f] font-['Courier_Prime'] uppercase text-[12px] tracking-wider mt-[4px]"
                                      : 'text-[#60584c] group-hover:text-[#0c221f] transition-colors duration-150'
                                      }`}
                                  >
                                    {feature}
                                  </Typography>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <img style={{
              // objectFit: 'cover',
              position: 'absolute',
              top: "0px",
              left: "0",
              width: "60px",
            }} src={BorderY} />
            <img style={{
              // objectFit: 'cover',
              position: 'absolute',
              top: "0px",
              right: "0",
              width: "60px",
            }} src={BorderY} />
          </div>
          <img style={{
            position: 'absolute',
            bottom: "0px",
            left: 0,
            width: "100%",
            height: "60px"
          }} src={BorderX} />
        </div>

        {/* Detailed Features Header */}
        <div className="w-full pt-[80px] pb-[40px] px-[40px] flex flex-col items-center text-center">
          <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[38px] text-[#0c221f] tracking-[-1px] mb-[8px]">
            Compare plans and features
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#60584c] text-[18px]">
            See exactly what's included at each tier before you decide.
          </Typography>
        </div>

        {/* Detailed Comparison Table */}
        <div className="w-full px-[60px] pb-[0px] overflow-x-auto md:overflow-visible">
          <table className="w-full border-collapse text-left border border-[#e0dac6] border-solid bg-white shadow-[0_8px_30px_rgba(12,34,31,0.02)]">
            <thead>
              <tr className="border-b border-[#e0dac6] border-solid">
                <th className="py-[20px] px-[24px] w-[35%] border-r border-[#e0dac6] sticky top-0 bg-[#fcfbf9] z-20">
                  <Typography className="font-['Courier_Prime'] font-medium text-[14px] text-[#0c221f] uppercase tracking-wider">Features</Typography>
                </th>
                <th className="py-[20px] px-[16px] text-center w-[21%] border-r border-[#e0dac6] sticky top-0 bg-[#fcfbf9] z-20">
                  <Typography className="font-['Courier_Prime'] font-medium text-[14px] text-[#0c221f] uppercase tracking-wider">Launch</Typography>
                  <Typography className="font-['Geist:Medium'] font-medium text-[16px] text-[#06b349] mt-[6px] tracking-wide">
                    {plans[0].pricing[billingTab].price}
                    <span className="text-[11px] text-[#8a8475] font-normal lowercase">{plans[0].pricing[billingTab].period}</span>
                  </Typography>
                  <button
                    onClick={() => window.open('https://app.wenext.ai/auth', '_blank')}
                    className="w-full mt-3 bg-[#f8f5ec] text-[#0c221f] hover:bg-[#0c221f] hover:text-white border border-[#e0dac6] border-solid py-[10px] px-[16px] font-['Geist:Bold'] font-bold text-[12px] transition-colors active:scale-[0.98] duration-150 cursor-pointer uppercase tracking-wider"
                  >
                    Start Launch
                  </button>
                </th>
                <th className="py-[20px] px-[16px] text-center w-[22%] border-r border-l border-[#e0dac6] sticky top-0 bg-transparent z-20 overflow-hidden">
                  <div className="absolute inset-0 bg-[#fcfbf9] -z-10" />
                  <div className="absolute inset-0 bg-[#06b349]/[0.02] -z-10" />
                  <Typography className="font-['Courier_Prime'] font-medium text-[14px] text-[#0c221f] uppercase tracking-wider">Sprint</Typography>
                  <Typography className="font-['Geist:Medium'] font-medium text-[16px] text-[#06b349] mt-[6px] tracking-wide">
                    {plans[1].pricing[billingTab].price}
                    <span className="text-[11px] text-[#8a8475] font-normal lowercase">{plans[1].pricing[billingTab].period}</span>
                  </Typography>
                  <button
                    onClick={() => window.open('https://app.wenext.ai/auth', '_blank')}
                    className="w-full mt-3 bg-[#06b349] hover:bg-[#05a043] text-white py-[10px] px-[16px] font-['Geist:Bold'] font-bold text-[12px] transition-colors active:scale-[0.98] duration-150 cursor-pointer uppercase tracking-wider shadow-sm"
                  >
                    Get Sprint
                  </button>
                </th>
                <th className="py-[20px] px-[16px] text-center w-[22%] sticky top-0 bg-[#fcfbf9] z-20">
                  <Typography className="font-['Courier_Prime'] font-medium text-[14px] text-[#0c221f] uppercase tracking-wider">Turbo</Typography>
                  <Typography className="font-['Geist:Medium'] font-medium text-[16px] text-[#06b349] mt-[6px] tracking-wide">
                    {plans[2].pricing[billingTab].price}
                    <span className="text-[11px] text-[#8a8475] font-normal lowercase">{plans[2].pricing[billingTab].period}</span>
                  </Typography>
                  <button
                    onClick={() => window.open('https://app.wenext.ai/auth', '_blank')}
                    className="w-full mt-3 bg-[#f8f5ec] text-[#0c221f] hover:bg-[#0c221f] hover:text-white border border-[#e0dac6] border-solid py-[10px] px-[16px] font-['Geist:Bold'] font-bold text-[12px] transition-colors active:scale-[0.98] duration-150 cursor-pointer uppercase tracking-wider"
                  >
                    Get Turbo
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {compareCategories.map((category, catidx) => (
                <React.Fragment key={catidx}>
                  {/* Category Header Row */}
                  <tr className="border-b border-[#e0dac6] border-solid">
                    <td colSpan={4} className="py-[12px] px-[24px] bg-[#f5f0e1] z-10">
                      <div className="flex items-center gap-[10px]">
                        {category.icon ? (
                          <img src={category.icon} alt="" className="size-[18px] shrink-0 object-contain" />
                        ) : (
                          <div className="size-[18px] bg-[#e0dac6]/40 shrink-0" />
                        )}
                        <Typography className="font-['Courier_Prime'] font-medium text-[13px] text-[#0c221f] uppercase tracking-widest">
                          {category.name}
                        </Typography>
                      </div>
                    </td>
                  </tr>

                  {/* Features under Category */}
                  {category.features.map((row, rowidx) => (
                    <tr key={rowidx} className="border-b border-[#e0dac6]/60 border-solid  transition-colors duration-100">
                      <td className="py-[16px] px-[24px] border-r border-[#e0dac6]/60">
                        <Typography className="font-['Geist:Regular'] font-regular text-[14px] text-[#0c221f]">
                          {row.name}
                        </Typography>
                      </td>

                      {/* Launch (Startup) cell */}
                      <td className="py-[16px] px-[16px] text-center border-r border-[#e0dac6]/60 bg-white">
                        {typeof row.startup === 'boolean' ? (
                          row.startup ? <div className="inline-flex justify-center"><CheckIcon /></div> : <DashIcon />
                        ) : (
                          <Typography className="font-['Geist:Regular'] text-[13px] text-[#60584c]">{row.startup}</Typography>
                        )}
                      </td>

                      {/* Sprint (Scale) cell - HIGHLIGHTED */}
                      <td className="py-[16px] px-[16px] text-center bg-[#06b349]/[0.01] border-r border-l border-[#e0dac6]/60">
                        {typeof row.scale === 'boolean' ? (
                          row.scale ? <div className="inline-flex justify-center"><CheckIcon /></div> : <DashIcon />
                        ) : (
                          <Typography className="font-['Geist:Regular'] font-regular text-[13px] text-[#06b349] font-regular">{row.scale}</Typography>
                        )}
                      </td>

                      {/* Turbo (Enterprise) cell */}
                      <td className="py-[16px] px-[16px] text-center bg-white">
                        {typeof row.enterprise === 'boolean' ? (
                          row.enterprise ? <div className="inline-flex justify-center"><CheckIcon /></div> : <DashIcon />
                        ) : (
                          <Typography className="font-['Geist:Regular'] text-[13px] text-[#60584c]">{row.enterprise}</Typography>
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}

              {/* Bottom CTA Row */}

            </tbody>
          </table>
        </div>

      </div>

      <Footer />
    </div>
  );
}
