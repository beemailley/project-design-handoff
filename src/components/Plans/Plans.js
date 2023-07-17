import React, { useState } from 'react';
import plans from 'libraries/plans';
import { StyledPlans } from 'components/Plans/Plans.styles';
import { RegistrationModal } from 'components/RegistrationModal/RegistrationModal'

export const Plans = () => {
  const [id, setId] = useState(0)
  const [showform, setShowForm] = useState(false)

  const handleClick = (event) => {
    setId(event.target.value)
    setShowForm(true);
  }
  return (
    <>
      <StyledPlans>
        <h2 id="plans">Choose your preferred pricing plan:</h2>
        <div className="plan-wrapper">
          {plans.map((plan) => (
            <div key={plan.id} className="plan-card">
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <p className="payment">{plan.payment}</p>
              <p className="subtitle">{plan.subtitle}</p>
              <div className="plan-details">
                <p>{plan.recipes}</p>
                <p>{plan.yoga}</p>
                <p>{plan.discount}</p>
              </div>
              <button type="button" value={plan.id} onClick={handleClick}>Choose this plan</button>
            </div>
          ))}
        </div>
      </StyledPlans>
      {showform && (<RegistrationModal id={id} setShowForm={setShowForm} />)}
    </>

  )
}