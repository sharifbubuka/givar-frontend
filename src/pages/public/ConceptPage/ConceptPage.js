import React, { useState } from 'react'
import PrimaryHeader from '../PrimaryHeader/PrimaryHeader'
import ExternalRoute from '../../../components/ExternalRouterLink'
import { makeStyles } from '@material-ui/core/styles'
import { WiTime2 } from 'react-icons/wi'
import { RiCalendar2Line } from 'react-icons/ri'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  article: {
    // backgroundColor: 'purple',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column'
  },
  subheader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.8rem',
    color: theme.palette.primary.main
  },
  articleStats: {
    display: 'flex',
    alignItems: 'center'
  },
  articleStatsIcon: {
    marginRight: theme.spacing(0.5)
  },
  articleHeader: {
    textAlign: 'center'
  },
  articleMainheader: {
    margin: theme.spacing(2)
  },
  articleSubheader: {
    margin: theme.spacing(1)
  }
}))

function ConceptPage() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <PrimaryHeader />
      <main className={classes.main}>
        <Container maxWidth='md' className={classes.article}>
          <div className={classes.subheader}>
            <span className={classes.articleStats}>
              <WiTime2 className={classes.articleStatsIcon} /> 15 Minutes
            </span>
            <span className={classes.articleStats}>
              <RiCalendar2Line className={classes.articleStatsIcon} /> 30th January, 2021
            </span>
          </div>

          <article>
            <h2>BACKGROUND</h2>
            <p>It’s 7:00 pm on a somewhat dark evening. You are watching the evening news on NTV. 
              A boy with a chronic heart disease is narrating the agony he goes through every day and 
              is requesting for any form of assistance from whoever could be watching the news then. 
              You want to help. You want to know more. You want to share that story with your rich 
              friends. But all that is not as easy as it sounds. Why?
            </p>
            <p>The only link between you and the plight of this young man is a telephone number 
              displayed in the news ticker at the bottom of your screen and probably this news segment.<br />

              But wait! What if there is an easier way? What if this boy’s story had a dedicated page on 
              the internet? And you could share that page on a single click. What if you don’t need a credit 
              card (as most internet financial transaction processes demand) to donate to this young man, and 
              all there is are a few clicks and your mobile money pin number to send them some money? What if 
              you could create a smaller donation drive on your company website or even work place, linked to 
              his main page, to pull more support from your network?
            </p>
            <p>
              What goes around comes around. Let us assume that boy is you. Wouldn’t you have loved to know all 
              there is about your fundraising campaign. How many people are contributing to it? Where are they 
              contributing from? What are their average contributions and an estimation of when you will most 
              likely hit your target? How often has it been shared on social media? Couldn’t you want to send an 
              email thank you message or progress report to whoever would have cared to lend you a hand in this 
              regard?
            </p>
            <blockquote>These questions are at the heart of Givar’s mission.</blockquote>
            <h2>THE PROBLEM</h2>
            <blockquote>What is the exact problem we are solving?</blockquote>
            <p>
              There exists a great deal of fundraising platforms, majority based and custom-made for western markets. 
              This has led to an unbalanced usage cases, where it is on one side relatively easy to publish a fundraise 
              campaign on these platforms but on the other side challenging to contribute to a campaign. This is so 
              usually due to the low adoption in Africa of most of the payment gateways used on these platforms, for 
              example PayPal, Stripe, Mastercard among others.
            </p>
            <h2>SOLUTION</h2>
            <blockquote>What is the exact solution we are offering?</blockquote>
            <p>
              We are developing a web based fundraising platform where users can publish verified fundraising campaigns from
              a range of categories like personal projects, health and emergencies, education-related, memorials among others. 
              Givar will be a platform tailor-made for the average local and one that will be able to support not only large 
              campaigns but as well as relatively small low transaction volume campaigns.
            </p>
            <h2>FEATURES</h2>
            <p>
              Some of the vital features of this application will include:
              <ul>
                <li>
                  Flexible payment mode: We plan to employ the <ExternalRoute text='mtn-momo ' location='https://momodeveloper.mtn.com/'/>  
                   api and airtel-money as our primary payment gateways. We believe this will promote inclusivity within the platform.
                </li>
                <li>
                  Verified users and campaigns: We intend to consequently (future prospect, since it is a premium api) employ the  
                  <ExternalRoute text=' shiftpro-kyc-api' location='https://shuftipro.com/uganda' /> that will enable us verify our users
                  and campaigns on account registration or before publishing in their first campaign. This will be a means to mitigate 
                  fraud on the platform.
                </li>
              </ul>
            </p>

          </article>
        </Container>
      </main>
    </div>
  )
}

export default ConceptPage
