import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import globalStyle from '../../../../assets/nativeStyles/global';
import Goback from '../../../common/Goback';
import styles from './styles';

export default class Privacy extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: '隐私条款',
    headerTitleStyle: globalStyle.black15,
    headerLeft: <Goback navigation={navigation}/>,
  });



  render() {
    return (
      <View style={styles.pView}>
        <ScrollView scrollIndicatorInsets={{right: -3}}>
          <Text style={styles.pTitle}>隐私权政策</Text>
          <View style={styles.pReturn} />
          <Text style={styles.pSignal}>最近更新日期：2018年11月1日</Text>
          <Text style={styles.pSignal}>生效日期：2018年11月8日</Text>
          <View style={styles.pReturn} />
          <Text style={styles.pSubTitle}>提示条款</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您的信任对我们非常重要，我们深知个人信息对您的重要性，我们将按法律法规要求，采取相应安全保护措施，尽力保护您的个人信息安全可控。鉴于此，艺魅网服务提供者（或简称“我们”）制定本《隐私权政策》（下称“本政策 /本隐私权政策”）并提醒您：</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本政策适用于艺魅网提供的所有产品和服务。如我们关联公司（范围详见定义部分）的产品或服务中使用了艺魅网提供的产品或服务但未设独立隐私权政策的，则本政策同样适用于该部分产品或服务。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;需要特别说明的是，本政策不适用于其他第三方向您提供的服务，也不适用于艺魅网中已另行独立设置法律声明及隐私权政策的产品或服务。例如艺魅网上的卖家依托艺魅网向您提供服务时，您向卖家提供的个人信息不适用本政策。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在使用艺魅网各项产品或服务前，请您务必仔细阅读并透彻理解本政策，在确认充分理解并同意后使用相关产品或服务。一旦您开始使用艺魅网各项产品或服务，即表示您已充分理解并同意本政策。如对本政策内容有任何疑问、意见或建议，您可通过艺魅网提供的各种联系方式与我们联系。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>第一部分 定义</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艺魅网：指艺魅网（域名为 pgtartcentre.com）网站及APP客户端。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艺魅网服务提供者：指艺魅网的网络及软件技术服务提供者上海艺魅咖啡画廊发展股份有限公司。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;个人信息：指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;个人敏感信息：指包括身份证件号码、个人生物识别信息、银行账号、财产信息、行踪轨迹、交易信息、14岁以下（含）儿童信息等的个人信息。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;个人信息删除：指在实现日常业务功能所涉及的系统中去除个人信息的行为，使其保持不可被检索、访问的状态。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除另有约定外，本政策所用定义与《艺魅网服务协议》中的定义具有相同的涵义。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>第二部分  隐私权政策</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一、我们收集了哪些信息</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二、我们如何使用收集的信息</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三、我们如何使用Cookie和同类技术</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;四、我们如何共享、转让、公开披露您的信息</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;五、我们如何保护您的信息</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;六、您如何管理您的信息</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;七、我们如何处理未成年人的信息</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;八、您的信息如何在全球范围转移</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;九、本隐私权政策如何更新</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;十、如何联系我们</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>一、我们收集了哪些信息</Text>
          <Text style={styles.pContent}>（一）您创建或者提供给我们的信息</Text>
          <Text style={styles.pContent}>1、成为我们的会员</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们通过艺魅平台账户为您提供会员服务。为使用我们的会员服务，您需要创建艺魅平台账户，提供手机号码、拟使用的会员名和密码。如果您仅需使用浏览、搜索服务，您不需要注册成为我们的会员及提供上述信息。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果您选择提供真实姓名、性别、出生年月日、居住地、您本人肖像的头像等非注册必须的个人资料，我们可以为您提供会员生日特权等更加个性化的会员服务。如果您不提供上述信息，不会影响您使用艺魅网的浏览、搜索、购买服务。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果您需要注册为卖家或服务商，除了上述信息外，我们会收集您的身份信息或企业基本信息等法律规定收集的信息。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于需要通过艺魅平台账户才能使用的服务，我们可能会根据您提供的上述信息校验您的会员身份，确保我们是在为您本人提供服务。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果您已拥有艺魅平台账户，我们可能会在艺魅平台服务中显示您的上述个人信息，以及您在艺魅平台上或与艺魅平台账户相关联的产品和服务中执行的操作，例如通过艺魅平台账户集中展示您的个人资料或交易订单。我们会尊重您对艺魅平台服务和艺魅平台账户设置所做的选择。</Text>
          <Text style={styles.pContent}>2、完成您相关的交易</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为完成您所选择或达成的交易，请您绑定支付方式，并提供收货人姓名、收货地址、邮政编码、收货人联系电话。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您可以通过艺魅网为其他人订购商品或服务，您需要提供该实际收货人的前述个人信息。您可以请求其他人为您付款，那么您需要提供代付人的支付宝账号及/或手机号码。在向艺魅网提供这些个人信息之前，您需确保您已经取得合法的授权。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为便于向您提供订单管理服务，我们会收集您在使用我们服务过程中产生的订单信息。</Text>
          <Text style={styles.pContent}>（二）我们在您使用服务过程中收集的信息</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们会收集关于您使用我们产品或服务以及使用方式的信息，这些信息包括：</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;设备信息：我们会根据您在软件安装及/或使用中授予的具体权限，接收并记录您所使用的设备相关信息（例如设备型号、操作系统版本、设备设置、唯一设备标识符、设备环境等软硬件特征信息）、设备所在位置相关信息（例如IP 地址、GPS位置以及能够提供相关信息的WLAN接入点、蓝牙和基站等传感器信息）。如果您在安装及/或使用过程中拒绝授予我们相应权限的，我们并不会记录您上述对应的信息。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务日志信息：当您使用我们的网站或客户端提供的产品或服务时，我们会自动收集您对我们服务的详细使用情况，作为有关网络日志保存。例如搜索查询内容、IP地址、浏览器的类型、电信运营商、使用的语言、访问日期和时间及您访问的网页记录等。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他相关信息：为了帮助您更好地使用我们的产品或服务，我们会收集相关信息。例如为确保您使用我们服务时能与您认识的人分享购物体验，如您选择开启导入通讯录功能，我们可能对您联系人的姓名和电话号码进行加密收集。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请您理解，单独的设备信息、日志信息等是无法识别特定自然人身份的信息。除非将这类非个人信息与其他信息结合用于识别特定自然人身份，或者将其与个人信息结合使用，那么在结合使用期间，这类非个人信息将被视为个人信息，我们会将该类个人信息做匿名化、去标识化处理（取得您的授权或法律法规另有规定的情况除外）。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当您与我们联系时，为验证您的身份，帮助您解决问题，我们可能会记录您与我们的对话并收集其他为解决问题所需的必要信息。</Text>
          <Text style={styles.pContent}>（三）我们通过间接获得方式收集到的您的信息</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为确认交易状态，为您提供售后与争议解决服务，我们会通过您基于交易所选择的交易对象、支付机构、物流公司等，收集与交易进度相关的您的交易、支付、物流信息。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他用户提供或分享的信息中可能含有您的信息。例如，其他用户提供的物流地址或分享的内容中可能包含您的信息。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您可通过艺魅平台账户在我们提供的链接入口使用我们关联公司提供的产品或服务当您通过艺魅平台账户使用上述服务时，您授权我们根据实际业务及合作需要，从我们关联公司处接收、汇总、分析我们确认其来源合法或您授权同意其向我们提供的您的个人信息或交易信息。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>二、我们如何使用收集的信息</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、向您提供产品或服务。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、为改善我们的产品或服务，以便向您提供更符合您个性化需求的信息展示、搜索及交易服务，我们会根据您的浏览及搜索记录、设备信息、位置信息、订单信息，提取您的浏览及搜索偏好、行为习惯、位置信息等特征，基于特征标签进行间接人群画像，并展示、推送信息和可能的商业广告。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果您不想接收我们给您发送的商业广告，您可通过短信提示回复退订或我们提供的其他方式进行退订。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、为提高您使用我们及我们关联公司、合作伙伴提供服务的安全性，确保操作环境安全与识别会员账号异常状态，保护您或其他用户或公众的人身财产安全免遭侵害，更好地预防钓鱼网站、欺诈、网络漏洞、计算机病毒、网络攻击、网络侵入等安全风险，更准确地识别违反法律法规或艺魅网相关协议规则的情况，我们可能使用或整合您的会员信息、交易信息、设备信息、有关网络日志以及我们关联公司、合作伙伴取得您授权或依适用的法律共享的信息，综合判断您艺魅平台账户及交易风险、进行身份验证、检测及防范安全事件，并依法采取必要的记录、审计、分析、处置措施。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、我们可能会对收集的信息进行去标识化地研究、统计分析和预测，用于改善艺魅网的内容和布局，为商业决策提供产品或服务支撑，以及改进我们的产品和服务（例如使用匿名数据进行机器学习或模型算法训练）。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5、如我们停止运营艺魅网产品或服务，我们将及时停止继续收集您个人信息的活动，将停止运营的通知以逐一送达或公告的形式通知您，并对我们所持有的与已关停业务相关的个人信息进行删除或匿名化处理。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6、若我们将信息用于本政策未载明的其他用途，或者将基于特定目的收集而来的信息用于其他目的时，会事先征求您的同意。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>三、我们如何使用 Cookie 和同类技术</Text>
          <Text style={styles.pContent}>（一） Cookie</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为确保网站正常运转、为您获得更轻松的访问体验、向您推荐您可能感兴趣的内容，我们会在您的计算机或移动设备上存储Cookie、Flash Cookie，或浏览器（或关联应用程序）提供的其他通常包含标识符、站点名称以及一些号码和字符的本地存储（统称“Cookie”）。借助于 Cookie，网站能够存储您的偏好或购物车内的商品等数据。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果您的浏览器或浏览器附加服务允许，您可修改对Cookie的接受程度或拒绝我们的Cookie。有关详情，请参见 AboutCookies.org。但如果您这么做，在某些情况下可能会影响您安全访问我们的网站，且可能需要在每一次访问我们的网站时更改用户设置。</Text>
          <Text style={styles.pContent}>（二） Cookie 同类技术</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除 Cookie外，我们还会在网站上使用网站信标、像素标签、ETag等其他同类技术。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如，我们向您发送的电子邮件可能含有链接至我们网站内容的地址链接，如果您点击该链接，我们则会跟踪此次点击，帮助我们了解您的产品或服务偏好，以便于我们主动改善客户服务体验。网站信标通常是一种嵌入到网站或电子邮件中的透明图像。借助于电子邮件中的像素标签，我们能够获知电子邮件是否被打开。如果您不希望自己的活动以这种方式被追踪，则可以随时从我们的寄信名单中退订。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ETag（实体标签）是在互联网浏览器与互联网服务器之间背后传送的HTTP协议标头，可代替Cookie。ETag可以帮助我们避免不必要的服务器负载，提高服务效率，节省资源、能源，同时，我们可能通过ETag来记录您的身份，以便我们可以更深入地了解和改善我们的产品或服务。大多数浏览器均为用户提供了清除浏览器缓存数据的功能，您可以在浏览器设置功能中进行相应的数据清除操作。但请注意，如果停用ETag，您可能无法享受相对更佳的产品或服务体验。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>四、我们如何共享、转让、公开披露您的信息</Text>
          <Text style={styles.pContent}>（一）共享</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们不会与艺魅网服务提供者以外的公司、组织和个人共享您的个人信息，但以下情况除外：</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、在法定情形下的共享：我们可能会根据法律法规规定、诉讼争议解决需要，或按行政、司法机关依法提出的要求，对外共享您的个人信息。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、在获取明确同意的情况下共享：获得您的明确同意后，我们会与其他方共享您的个人信息。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、在您主动选择情况下共享： 您通过艺魅平台购买商品或服务，我们会根据您的选择，将您的订单信息中与交易有关的必要信息共享给相关商品或服务的提供者，以实现您的交易及售后服务需求。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、与关联公司间共享：为便于我们基于艺魅平台账户向您提供产品和服务，推荐您可能感兴趣的信息，识别会员账号异常，保护艺魅网关联公司或其他用户或公众的人身财产安全免遭侵害，您的个人信息可能会与我们的关联公司和/或其指定的服务提供商共享。我们只会共享必要的个人信息，且受本隐私政策中所声明目的的约束，如果我们共享您的个人敏感信息或关联公司改变个人信息的使用及处理目的，将再次征求您的授权同意。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5、鉴于物流服务为艺魅平台提供物流信息系统和技术服务，我们会将您与物流有关的必要订单信息共享，用于与商品或服务的交付相关的用途。
</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6、与授权合作伙伴共享：我们可能委托授权合作伙伴为您提供某些服务或代表我们履行职能，我们仅会出于本隐私权政策声明的合法、正当、必要、特定、明确的目的共享您的信息，授权合作伙伴只能接触到其履行职责所需信息，且不得将此信息用于其他任何目的。
</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前，我们的授权合作伙伴包括以下类型：</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）广告、分析服务类的授权合作伙伴。除非得到您的许可，否则我们不会将您的个人身份信息与提供广告、分析服务的合作伙伴共享。我们会向这些合作伙伴提供有关其广告覆盖面和有效性的信息，但不会提供您的个人身份信息，或者我们将这些信息进行汇总，以便它不会识别您个人。这类合作伙伴可能将上述信息与他们合法获取的其他数据相结合，以进行广告或决策建议。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）供应商、服务提供商和其他合作伙伴。我们将信息发送给支持我们业务的供应商、服务提供商和其他合作伙伴，这些支持包括提供技术基础设施服务、分析我们服务的使用方式、衡量广告和服务的有效性、提供客户服务、支付便利或进行学术研究和调查。
</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们会与其约定严格的数据保护措施，令其按照我们的说明、本隐私权政策以及其他任何相关的保密和安全措施来处理个人信息。</Text>
          <Text style={styles.pContent}>（二）转让</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们不会将您的个人信息转让给任何公司、组织和个人，但以下情况除外：</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、在获取明确同意的情况下转让：获得您的明确同意后，我们会向其他方转让您的个人信息；
</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、在艺魅网服务提供者发生合并、收购或破产清算情形，或其他涉及合并、收购或破产清算情形时，如涉及到个人信息转让，我们会要求新的持有您个人信息的公司、组织继续受本政策的约束，否则我们将要求该公司、组织和个人重新向您征求授权同意。
</Text>
          <Text style={styles.pContent}>（三）公开披露</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们仅会在以下情况下，公开披露您的个人信息：
</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、获得您明确同意或基于您的主动选择，我们可能会公开披露您的个人信息；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、如果我们确定您出现违反法律法规或严重违反艺魅平台相关协议及规则的情况，或为保护艺魅平台用户或公众的人身财产安全免遭侵害，我们可能依据法律法规或征得您同意的情况下披露关于您的个人信息，包括相关违规行为以及艺魅平台已对您采取的措施。例如，若您因出售假冒商品而严重违反艺魅规则，我们可能会公开披露您的店铺认证主体信息与违规情况。</Text>
          <Text style={styles.pContent}>（四）共享、转让、公开披露个人信息时事先征得授权同意的例外</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以下情形中，共享、转让、公开披露您的个人信息无需事先征得您的授权同意：
</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、与国家安全、国防安全有关的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、与公共安全、公共卫生、重大公共利益有关的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、与犯罪侦查、起诉、审判和判决执行等司法或行政执法有关的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、出于维护您或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5、您自行向社会公众公开的个人信息；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6、从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请知悉，根据适用的法律，若我们对个人信息采取技术措施和其他必要措施进行处理，使得数据接收方无法重新识别特定个人且不能复原，则此类处理后数据的共享、转让、公开披露无需另行向您通知并征得您的同意。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>五、我们如何保护您的信息</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）我们已采取符合业界标准、合理可行的安全防护措施保护您的信息，防止个人信息遭到未经授权访问、公开披露、使用、修改、损坏或丢失。例如，在您的浏览器与服务器之间交换数据时受 SSL协议加密保护；我们同时对艺魅网网站提供HTTPS协议安全浏览方式；我们会使用加密技术提高个人信息的安全性；我们会使用受信赖的保护机制防止个人信息遭到恶意攻击；我们会部署访问控制机制，尽力确保只有授权人员才可访问个人信息；以及我们会举办安全和隐私保护培训课程，加强员工对于保护个人信息重要性的认识。
</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）我们有行业先进的以数据为核心、围绕数据生命周期进行的数据安全管理体系，从组织建设、制度设计、人员管理、产品技术等方面多维度提升整个系统的安全性。目前，我们的重要信息系统已经通过网络安全等级保护的测评和ISO27001等认证。
</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）我们会采取合理可行的措施，尽力避免收集无关的个人信息。我们只会在达成本政策所述目的所需的期限内保留您的个人信息（除非法律有强制的存留要求）。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（四）互联网并非绝对安全的环境，使用艺魅平台服务时，我们强烈建议您不要使用非艺魅平台推荐的通信方式发送您的信息。您可以通过我们的服务建立联系和相互分享。当您通过我们的服务创建交流、交易或分享时，您可以自主选择沟通、交易或分享的对象，作为能够看到您的交易内容、联络方式、交流信息或分享内容等相关信息的第三方。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在使用艺魅网服务进行网上交易时，您不可避免地要向交易对方或潜在的交易对方披露自己的个人信息，如联络方式或联系地址。请您妥善保护自己的个人信息，仅在必要的情形下向他人提供。如您发现自己的个人信息尤其是您的账户或密码发生泄露，请您立即联络艺魅网客服，以便我们根据您的申请采取相应措施。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意，您在使用我们服务时自愿共享甚至公开分享的信息，可能会涉及您或他人的个人信息甚至个人敏感信息，如您在评价时选择上传包含个人信息的图片。请您更加谨慎地考虑，是否在使用我们的服务时共享甚至公开分享相关信息。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请使用复杂密码，协助我们保证您的账号安全。我们将尽力保障您发送给我们的任何信息的安全性。如果我们的物理、技术或管理防护设施遭到破坏，导致信息被非授权访问、公开披露、篡改或毁坏，导致您的合法权益受损，我们将承担相应的法律责任。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（五）我们将不定期更新并公开安全风险、个人信息安全影响评估报告等有关内容，您可通过艺魅网公告方式获得。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（六）在不幸发生个人信息安全事件后，我们将按照法律法规的要求向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。事件相关情况我们将以邮件、信函、电话、推送通知等方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同时，我们还将按照监管部门要求，上报个人信息安全事件的处置情况。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>六、您如何管理您的信息</Text>
          <Text style={styles.pContent}>您可以通过以下方式访问及管理您的信息：</Text>
          <Text style={styles.pContent}>（一）查询您的信息</Text>
          <Text style={styles.pContent}>您有权查询您的信息。您可以通过以下方式自行查询您的信息：</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;账户信息——如果您希望访问或编辑您的账户中的个人基本资料信息和支付信息、更改您的密码、添加安全信息或关闭您的账户等，您可以通过登录账号通过“账号管理”执行此类操作。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;搜索信息——您可以登录账号通过“我的收藏”访问或清除您的搜索历史记录。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;订单信息：您可以在艺魅网中查阅或清除您的订单记录、交易记录等。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果您无法通过上述路径查询该等信息，您可以随时通过艺魅网客服与我们取得联系。我们将在15天内回复您的访问请求。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于您在使用我们的产品或服务过程中产生的其他个人信息，我们将根据本条“（七）响应您的上述请求”中的相关安排向您提供。</Text>
          <Text style={styles.pContent}>（二）更正或补充您的信息</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当您发现我们处理的关于您的信息有错误时，您有权要求我们做出更正或补充。您可以通过“（一）查询您的信息”中列明的方式提出更正或补充申请。</Text>
          <Text style={styles.pContent}>（三）删除您的信息</Text>
          <Text style={styles.pContent}>您可以通过“（一）查询您的信息”中列明的方式删除您的部分信息。</Text>
          <Text style={styles.pContent}>在以下情形中，您可以向我们提出删除个人信息的请求：</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、如果我们处理个人信息的行为违反法律法规；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、如果我们收集、使用您的个人信息，却未征得您的明确同意；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、如果我们处理个人信息的行为严重违反了与您的约定；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、如果您不再使用我们的产品或服务，或您主动注销了账号；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5、如果我们永久不再为您提供产品或服务。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;若我们决定响应您的删除请求，我们还将同时尽可能通知从我们处获得您的个人信息的主体，并要求其及时删除（除非法律法规另有规定，或这些主体已独立获得您的授权）。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当您或我们协助您删除相关信息后，因为适用的法律和安全技术，我们可能无法立即立即从备份系统中删除相应的信息，我们将安全地存储您的个人信息并将其与任何进一步处理隔离，直到备份可以清除或实现匿名。</Text>
          <Text style={styles.pContent}>（四）改变您授权同意的范围</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每个业务功能需要一些基本的个人信息才能得以完成（见本隐私权政策“第一部分”）。除此之外，您可以在“我的艺魅-账号管理”中设置或与艺魅网客服联系或改变您的智能移动设备的设置等方式给予或收回您的授权同意（例如，您可以在手机艺魅APP“我的艺魅-设置-隐私”中收回您“通过手机号码找到我”的用户同意授权）。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当您收回同意后，我们将不再处理相应的个人信息。但您收回同意的决定，不会影响此前基于您的授权而开展的个人信息处理。</Text>
          <Text style={styles.pContent}>（五）注销您的账户</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您可以自行在“注销账户”页面（例如，手机艺魅APP“我的艺魅-设置-账户与安全-注销账户”）提交账户注销申请。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在您主动注销账户之后，我们将停止为您提供产品或服务，根据适用法律的要求删除您的个人信息，或使其匿名化处理。</Text>
          <Text style={styles.pContent}>（六）约束信息系统自动决策</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在某些业务功能中，我们可能仅依据信息系统、算法等在内的非人工自动决策机制做出决定。如果这些决定显著影响您的合法权益，您有权要求我们做出解释，我们也将在不侵害艺魅网商业秘密或其他用户权益、社会公共利益的前提下提供申诉方法。</Text>
          <Text style={styles.pContent}>（七）响应您的上述请求</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为保障安全，您可能需要提供书面请求，或以其他方式证明您的身份。我们可能会先要求您验证自己的身份，然后再处理您的请求。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将在15天内做出答复。如您不满意，还可以通过艺魅网客服发起投诉。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于您合理的请求，我们原则上不收取费用，但对多次重复、超出合理限度的请求，我们将酌情收取一定费用。对于与您的身份不直接关联的信息、无端重复信息，或者需要过多技术手段（例如，需要开发新系统或从根本上改变现行惯例）、给他人合法权益带来风险或者不切实际的请求，我们可能会予以拒绝。</Text>
          <Text style={styles.pContent}>在以下情形中，按照法律法规要求，我们将无法响应您的请求：</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、与国家安全、国防安全有关的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、与公共安全、公共卫生、重大公共利益有关的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、与犯罪侦查、起诉、审判和执行判决等有关的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、有充分证据表明个人信息主体存在主观恶意或滥用权利的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5、响应您的请求将导致您或其他个人、组织的合法权益受到严重损害的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6、涉及商业秘密的。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>七、我们如何处理未成年人的信息</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在电子商务活动中我们推定您具有相应的民事行为能力。如您为未成年人，我们要求您请您的父母或监护人仔细阅读本隐私权政策，并在征得您的父母或监护人同意的前提下使用我们的服务或向我们提供信息。
</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于经父母或监护人同意使用我们的产品或服务而收集未成年人个人信息的情况，我们只会在法律法规允许、父母或监护人明确同意或者保护未成年人所必要的情况下使用、共享、转让或披露此信息。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>八、您的信息如何在全球范围转移</Text>
          <Text style={styles.pContent}>我们在中华人民共和国境内运营中收集和产生的个人信息，存储在中国境内，以下情形除外：</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、适用的法律有明确规定；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、获得您的明确授权；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、您通过互联网进行跨境交易等个人主动行为。</Text>
          <Text style={styles.pContent}>针对以上情形，我们会确保依据本隐私权政策对您的个人信息提供足够的保护。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>九、本隐私权政策如何更新</Text>
          <Text style={styles.pContent}>我们的隐私权政策可能变更。</Text>
          <Text style={styles.pContent}>未经您明确同意，我们不会限制您按照本隐私权政策所应享有的权利。我们会在专门页面上发布对隐私权政策所做的任何变更。</Text>
          <Text style={styles.pContent}>对于重大变更，我们还会提供更为显著的通知（包括我们会通过艺魅网公示的方式进行通知甚至向您提供弹窗提示）。</Text>
          <Text style={styles.pContent}>本政策所指的重大变更包括但不限于：</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、我们的服务模式发生重大变化。如处理个人信息的目的、处理的个人信息类型、个人信息的使用方式等；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、我们在控制权等方面发生重大变化。如并购重组等引起的信息控制者变更等；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、个人信息共享、转让或公开披露的主要对象发生变化；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、您参与个人信息处理方面的权利及其行使方式发生重大变化；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5、我们负责处理个人信息安全的责任部门、联络方式及投诉渠道发生变化；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6、个人信息安全影响评估报告表明存在高风险。</Text>
          <Text style={styles.pContent}>我们还会将本隐私权政策的旧版本在艺魅网专门页面存档，供您查阅。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>十、如何联系我们</Text>
          <Text style={styles.pContent}>您可以通过以下方式与我们联系，我们将在15天内回复您的请求：</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、如对本政策内容有任何疑问、意见或建议，您可通过艺魅网客服及艺魅网服务中心在线客服与我们联系；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、如发现个人信息可能被泄露，您可以通过61371941投诉举报；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、我们还设立了个人信息保护专职部门，您可以通过service@epiao1616.com与其联系。</Text>
          <Text style={styles.pContent}>如果您对我们的回复不满意，特别是您认为我们的个人信息处理行为损害了您的合法权益，您还可以通过向被告住所地有管辖权的法院提起诉讼来寻求解决方案。</Text>
          <View style={styles.pReturn} />

        </ScrollView>
      </View>

    );
  }
}