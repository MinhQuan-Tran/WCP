export default function Card(props) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={props.user.avatar} alt={props.user.avatar} />
          <h3>
            {props.user.first_name} {props.user.last_name}
          </h3>
          <p>{props.user.employment.title}</p>
        </div>
        <div className="card-back">
          <div className="basic-info">
            <img src={props.user.avatar} alt={props.user.avatar} />
            <p>
              <b>
                {props.user.first_name} {props.user.last_name}
              </b>
              <br />
              {props.user.employment.title}
            </p>
          </div>
          <hr />
          <div className="more-info">
            <table>
              <tr>
                <td>
                  <b>Gender:</b>
                </td>
                <td>{props.user.gender}</td>
              </tr>
              <tr>
                <td>
                  <b>DOB:</b>
                </td>
                <td>{props.user.date_of_birth}</td>
              </tr>
              <tr>
                <td>
                  <b>Email:</b>
                </td>
                <td>
                  <a href={"mailto:" + props.user.email}>{props.user.email}</a>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Phone:</b>
                </td>
                <td>
                  <a href={"tel:" + props.user.phone_number}>
                    {props.user.phone_number}
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Address:</b>
                </td>
                <td>{props.user.address.street_address}</td>
              </tr>
              <tr>
                <td></td>
                <td>{props.user.address.street_name}</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {props.user.address.city +
                    ", " +
                    props.user.address.state +
                    ", " +
                    props.user.address.zip_code}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Subscription:</b>
                </td>
                <td>
                  {props.user.subscription.plan +
                    " - " +
                    props.user.subscription.status}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
