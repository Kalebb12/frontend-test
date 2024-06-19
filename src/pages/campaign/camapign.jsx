import { useState } from "react";
import "./campaign.css";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect } from "react";
import CampaignItem from "../../components/campaignItem";
const Campaign = () => {
  const [data, setData] = useState([]);
  const [num,setNum] = useState(0)
  useEffect(() => {
    fetch("https://infinion-test-int-test.azurewebsites.net/api/Campaign")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setNum(data.length)
      });
  }, []);

  return (
    <div className="container">
      <div className="content">
        <span className="header">All Campaigns</span>
        <div className="filter-section">
          <div className="btn-section">
            <button className="outline-btn">all (90)</button>
            <button className="outline-btn">Inactive (90)</button>
            <button className="outline-btn">Active (90)</button>
          </div>
          <div className="input-section">
            <input
              type="text"
              placeholder="search..."
              className="input-field search-field"
            />
            <input
              type="text"
              placeholder="filter by date ,"
              className="input-field filter-field"
            />
          </div>
        </div>
        <div className="campaign-nav">
          <span>S/N</span>
          <span>Campaign Name</span>
          <span>Start Date</span>
          <span>Status</span>
          <span>Action</span>
        </div>

        <div className="data-items">
          {data && data.length > 0 ? (
            data.map((campaign,index) => {
              return <CampaignItem key={campaign.id} obj={campaign} index={index+1} />;
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
          <div style={{display:"flex",justifyContent:"space-between",paddingRight:20}}>
              <Stack spacing={2}>
                <Pagination count={10} color="primary" />
              </Stack>
            <p style={{fontWeight:500}}>Showing {num} of 40 results</p>
          </div>
      </div>
    </div>
  );
};

export default Campaign;
