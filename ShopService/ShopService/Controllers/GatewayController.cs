using ShopService.Models;
using Spryng;
using Spryng.Models.Sms;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace ShopService.Controllers
{
    public class GatewayController : ApiController
    {
        const string credentialsUri = "";
        const string sender = "&sender=SOIS";
        string sandbox = "&sandbox=1";

        [HttpPost]
        public async Task<HttpResponseMessage> SendSms(Receiver receiver)
        {
            try
            {
                HttpClient client = new HttpClient();

                var uri = credentialsUri + "&recipient=48" + receiver.Number + "&message=" + receiver.Message + sender + sandbox;

                var result = await client.GetAsync(uri);

                return result;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

    }
}
