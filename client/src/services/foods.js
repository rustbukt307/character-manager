import api from './api-helper';

export const getAllCampaigns = async () => {
  const resp = await api.get('/campaigns');
  return resp.data;
}

export const getOneCampaign = async (id) => {
  const resp = await api.get(`/campaigns/${id}`);
  return resp.data;
}

export const createCampaign = async (campaignData) => {
  const resp = await api.post('/campaigns', { campaign: campaignData });
  return resp.data;
}

export const updateCampaign = async (id, campaignData) => {
  const resp = await api.put(`/campaigns/${id}`, { campaign: campaignData });
  return resp.data;
}

export const deleteCampaign = async (id) => {
  const resp = await api.delete(`/campaigns/${id}`);
  return resp
}

export const campaignToFlavor = async (flavorId, campaignId) => {
  const resp = await api.get(`/flavors/${flavorId}/campaigns/${campaignId}`);
  return resp.data;
}
